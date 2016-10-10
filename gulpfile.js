"use strict";
var gulp = require('gulp');
var concatCss = require('gulp-concat-css');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');
var livereload = require('gulp-livereload');
var rev = require('gulp-rev-append');
var	uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var connect = require('gulp-connect');
var csso = require('gulp-csso');
var imageop = require('gulp-image-optimization');


//server connect (root: '',)
gulp.task('connect', function() {
  connect.server({
  root: 'public',
  livereload: true
  });
});

//css
gulp.task('css', function() {
 gulp.src('app/css/*.css')
  .pipe(concatCss('allCss.css'))
  .pipe(autoprefixer({
            browsers: ['last 2 versions', '> 5%', 'IE 7'],
            cascade: false
        }))
  .pipe(csso())
  .pipe(rename('allCss.min.css'))
  .pipe(gulp.dest('public/css'))
  .pipe(connect.reload());

});

// js
gulp.task('js', function () {
  gulp.src(['app/js/*.js'])
        .pipe(concat('index.js'))
        .pipe(uglify())
        .pipe(gulp.dest('public/js'))
  .pipe(connect.reload());
});

//image
gulp.task('img', function(cb) {
    gulp.src(['app/img/*']).pipe(imageop({
        optimizationLevel: 5,
        progressive: true,
        interlaced: true
    })).pipe(gulp.dest('public/img')).on('end', cb).on('error', cb);
});

//html
gulp.task('html', function () {
  gulp.src('public/index.html')
    .pipe(connect.reload());
});

// Кеширование
gulp.task('rev', function() {
  gulp.src('public/index.html')
    .pipe(rev())
    .pipe(gulp.dest('public/'))
    .pipe(connect.reload());
});

//watch
gulp.task('watch', function() {
	gulp.watch('app/css/*.css', ['css']);
	gulp.watch('app/js/*.js', ['js']);
  gulp.watch('app/img/*', ['img']);
	gulp.watch('public/index.html', ['html']);
});

//default
gulp.task('default', ['connect', 'html', 'css', 'rev', 'js', 'img', 'watch']);