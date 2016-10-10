(function ($) {
"use strict";
	$('.form_butn').on('click', function (e) {
		e.preventDefault();
		var request = $('.form_input').val();
		$.getJSON("http://api.pixplorer.co.uk/image?word="+request+"&amount=7&size=tb",
function(data){
	$('.list').remove();
	var lodash = $('#mason').text();
  	var tpl = _.template(lodash);
  	$('.masonry').append(tpl(data));
  	$('.form_input').val("");
	});
		setTimeout(function () {
			$('.list').masonry({
			itemSelector: '.list_item',
			columnWidth: 51
		});
			},1500);
	});

	$.getJSON("http://api.pixplorer.co.uk/image?&amount=7&size=tb",
function(data){
	var lodash = $('#mason').text();
  	var tpl = _.template(lodash);
  	$('.masonry').append(tpl(data));
});

	setTimeout(function () {
		$('.list').masonry({
	  	itemSelector: '.list_item',
	 	 columnWidth: 51
	});
		},1500);
	
})(jQuery);