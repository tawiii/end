;(function ($) {
"use strict";
  var data = {
    all: [{
      option: [{
        step: 'STEP 1',
        h: 'Sed leo enim, condimentum',
        p: 'Quisque libero libero, dictum non turpis in, luctus semper lorem. Donec rhoncus a leo sit amet facilisis.',
        clas: 'carousel-element_1'
      }, {
        step: 'STEP 2',
        h: 'Morbi velit risus',
        p: 'Nulla venenatis tempor dui in molestie.Nulla quis dictum purus, sit amet porttitor est.',
        clas: 'carousel-element_2'
      }, {
        step: 'STEP 3',
        h: 'Sed leo enim, condimentum',
        p: 'Quisque libero libero, dictum non turpis in, luctus semper lorem. Donec rhoncus a leo sit amet facilisis.',
        clas: 'carousel-element_3'
      }]
    }, {
      option: [{
        step: 'STEP 2',
        h: 'Morbi velit risus',
        p: 'Nulla venenatis tempor dui in molestie.Nulla quis dictum purus, sit amet porttitor est.',
        clas: 'carousel-element_2'
      }, {
        step: 'STEP 3',
        h: 'Sed leo enim, condimentum',
        p: 'Quisque libero libero, dictum non turpis in, luctus semper lorem. Donec rhoncus a leo sit amet facilisis.',
        clas: 'carousel-element_3'
      },{
        step: 'STEP 1',
        h: 'Sed leo enim, condimentum',
        p: 'Quisque libero libero, dictum non turpis in, luctus semper lorem. Donec rhoncus a leo sit amet facilisis.',
        clas: 'carousel-element_1'
      }]
    }, {
      option: [{
        step: 'STEP 3',
        h: 'Sed leo enim, condimentum',
        p: 'Quisque libero libero, dictum non turpis in, luctus semper lorem. Donec rhoncus a leo sit amet facilisis.',
        clas: 'carousel-element_3'
      }, {
        step: 'STEP 1',
        h: 'Sed leo enim, condimentum',
        p: 'Quisque libero libero, dictum non turpis in, luctus semper lorem. Donec rhoncus a leo sit amet facilisis.',
        clas: 'carousel-element_1'
      }, {
        step: 'STEP 2',
        h: 'Morbi velit risus',
        p: 'Nulla venenatis tempor dui in molestie.Nulla quis dictum purus, sit amet porttitor est.',
        clas: 'carousel-element_2'
      }]
    }
    ]
  };
    var lodash = $('#sl').text();
    var tpl = _.template(lodash);
    $('.carousel').append(tpl(data));

      $('.carousel-arrow-left').on('click', function(event) {
        event.preventDefault();
        var hider = $(this).parent();
        var list = $(hider).find('.carousel-list');
        $(list).fadeOut(700, function() {
          $(hider).find('.carousel-list li:last-child').prependTo(list);
        });
        $(list).fadeIn(700);
        
      });
      $('.carousel-arrow-right').on('click', function(event) {
        event.preventDefault();
        var hider = $(this).parent();
        var list = $(hider).find('.carousel-list');
        $(list).fadeOut(700, function() {
          $(hider).find('.carousel-list li:first-child').appendTo(list);
        });
        $(list).fadeIn(700);

      });

      var interval = setInterval(go, 4300);
      
      function go() {
        var ww = $('.carousel-arrow-right').trigger('click');
      }
      $('.carousel-hider').hover(function() {
        clearInterval(interval);
      }, function() {
        interval = setInterval(go, 4300);
      });
})(jQuery);