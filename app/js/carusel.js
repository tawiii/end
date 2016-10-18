;(function ($) {
	var slider = {

		makeItem : [
			{
				btnLeft : '',
				btnRight: '',
				sliderItem : [
					{
						btnStep     : 'Step 1',
						class       : 'slide_1',
						btnClass    : 'btn-small_1',
						titleClass  : 'carusel_title_1',
						paragraphClass : 'carusel_paragraph_1',
						title       : 'Sed leo enim, condimentum',
						paragraph   : 'Quisque libero libero, dictum non turpis in, luctus semper lorem. Donec rhoncus a leo sit amet facilisis.' 
					},
					{
						btnStep     : 'Step 2',
						class       : 'slide_2',
						btnClass    : 'btn-small_2',
						titleClass  : 'carusel_title_2',
						paragraphClass : 'carusel_paragraph_2',
						title       : 'Morbi velit risus',
						paragraph   : 'Nulla venenatis tempor dui in molestie. Nulla quis dictum purus, sit amet porttitor est.' 
					},
					{
						btnStep     : 'Step 3',
						class       : 'slide_3',
						btnClass    : 'btn-small_3',
						titleClass  : 'carusel_title_3',
						paragraphClass : 'carusel_paragraph_3',
						title       : 'Sed leo enim, condimentum',
						paragraph   : 'Quisque libero libero, dictum non turpis in, luctus semper lorem. Donec rhoncus a leo sit amet facilisis.' 
					},
				],
			},

			{
				btnLeft : '',
				btnRight: '',
				sliderItem : [
					{
						btnStep     : 'Step 2',
						class       : 'slide_2',
						btnClass    : 'btn-small_2',
						titleClass  : 'carusel_title_2',
						paragraphClass : 'carusel_paragraph_2',
						title       : 'Morbi velit risus',
						paragraph   : 'Nulla venenatis tempor dui in molestie. Nulla quis dictum purus, sit amet porttitor est.' 
					},
					{
						btnStep     : 'Step 1',
						class       : 'slide_1',
						btnClass    : 'btn-small_1',
						titleClass  : 'carusel_title_1',
						paragraphClass : 'carusel_paragraph_1',
						title       : 'Sed leo enim, condimentum',
						paragraph   : 'Quisque libero libero, dictum non turpis in, luctus semper lorem. Donec rhoncus a leo sit amet facilisis.' 
					},
					{
						btnStep     : 'Step 3',
						class       : 'slide_3',
						btnClass    : 'btn-small_3',
						titleClass  : 'carusel_title_3',
						paragraphClass : 'carusel_paragraph_3',
						title       : 'Sed leo enim, condimentum',
						paragraph   : 'Quisque libero libero, dictum non turpis in, luctus semper lorem. Donec rhoncus a leo sit amet facilisis.' 
					},
				],
			},

			{
				btnLeft : '',
				btnRight: '',
				sliderItem : [
					{
						btnStep     : 'Step 3',
						class       : 'slide_3',
						btnClass    : 'btn-small_3',
						titleClass  : 'carusel_title_3',
						paragraphClass : 'carusel_paragraph_3',
						title       : 'Sed leo enim, condimentum',
						paragraph   : 'Quisque libero libero, dictum non turpis in, luctus semper lorem. Donec rhoncus a leo sit amet facilisis.' 
					},
					{
						btnStep     : 'Step 1',
						class       : 'slide_1',
						btnClass    : 'btn-small_1',
						titleClass  : 'carusel_title_1',
						paragraphClass : 'carusel_paragraph_1',
						title       : 'Sed leo enim, condimentum',
						paragraph   : 'Quisque libero libero, dictum non turpis in, luctus semper lorem. Donec rhoncus a leo sit amet facilisis.' 
					},
					{
						btnStep     : 'Step 2',
						class       : 'slide_2',
						btnClass    : 'btn-small_2',
						titleClass  : 'carusel_title_2',
						paragraphClass : 'carusel_paragraph_2',
						title       : 'Morbi velit risus',
						paragraph   : 'Nulla venenatis tempor dui in molestie. Nulla quis dictum purus, sit amet porttitor est.' 
					},
				],
			},
		],
	}

	var $plaseHolder = $('.block-slide');
	var $tpl_src = $('#carusel').text();
	var _tpl = _.template($tpl_src);
	$plaseHolder.html(_tpl(slider));

	var defaults = {
		countItem      : 5,
		
	};

	var methods = {
		init: function (params) {
			 var $item = $('.carousel-element');
			 var $img = $('.carousel-element img');
			 var options = $.extend({}, defaults, params);
			 var widthCarousel = null;
			 var itemWidth = $('.carousel-element').width();
			 var itemHeight = $('.carousel-element').height();
			 var itemMarginRigth = 0;
			 $(window).resize(function(){
				var widthWindow = $(this).width();

				if (widthWindow <= 767) {
					if (!(widthWindow <= 767 && windowWidth <= 767)) {
						windowWidth = 767;
						itemWidth = $('.carousel-element').width();
						var widthItem = itemWidth + itemMarginRigth;
						widthCarousel = (options.countItem * (itemWidth + itemMarginRigth)) + 'px';
						 $img.css('maxWidth', itemWidth + 'px');
						$('.carousel-hider').css('width', widthCarousel);
						var elementsList = $('.carousel-list');
						var currentLeftValue = 0;
						currentLeftValue = currentLeftValue - widthItem;
						elementsList.animate({left: currentLeftValue + 'px'}, 0)
					}
				}

				if (widthWindow >= 768 && widthWindow <=959) {
					if (!(widthWindow >= 768 && widthWindow <=959 && windowWidth >= 768 && windowWidth <=959 )) {
						windowWidth = 768;
						itemWidth = $('.carousel-element').width();
						var widthItem = itemWidth + itemMarginRigth;
						widthCarousel = (options.countItem * (itemWidth + itemMarginRigth)) + 'px';
						 $img.css('maxWidth', itemWidth + 'px');
						$('.carousel-hider').css('width', widthCarousel);
						var elementsList = $('.carousel-list');
						var currentLeftValue = 0;
						currentLeftValue = currentLeftValue - widthItem;
						elementsList.animate({left: currentLeftValue + 'px'}, 0)
					}
				}

				if (widthWindow >= 960) {
					if (!(widthWindow >= 960 && windowWidth >= 960)) {
						windowWidth = 960;
						itemWidth = $('.carousel-element').width();
						var widthItem = itemWidth + itemMarginRigth;
						widthCarousel = (options.countItem * (itemWidth + itemMarginRigth)) + 'px';
						 $img.css('maxWidth', itemWidth + 'px');
						$('.carousel-hider').css('width', widthCarousel);
						var elementsList = $('.carousel-list');
						var currentLeftValue = 0;
						currentLeftValue = currentLeftValue - widthItem;
						elementsList.animate({left: currentLeftValue + 'px'}, 0)
					}
				}
			});
			 var widthItem = itemWidth + itemMarginRigth;
			
			 widthCarousel = (options.countItem * (itemWidth + itemMarginRigth)) + 'px';
			 $img.css('maxWidth', itemWidth + 'px');
			
			 this.css('width', widthCarousel);

			
			var leftUIEl = $('.carousel-arrow-left');
			var rightUIEl = $('.carousel-arrow-right');
			var elementsList = $('.carousel-list');
			var ItemElement = $('.carousel-element');

			var pixelsOffset = itemWidth + itemMarginRigth;
			var currentLeftValue = 0;
			
			var elementsListLength = elementsList.length;
			var elementsCount = (elementsList.find('.carousel-element').length)/elementsListLength;
			var minimumOffset = - ((elementsCount - options.countItem) * pixelsOffset);
			var maximumOffset = 0;

			currentLeftValue = currentLeftValue - widthItem;

			var ff = document.querySelectorAll('.carousel-list')
			$.each(elementsList, function() {
				$(this).find('.carousel-element:last').prependTo(this);
			})
			elementsList.animate({left: currentLeftValue + 'px'}, 0)

			leftUIEl.click(function(event) {        
				var findElementsList = $(this).parent().find('.carousel-list');
				var findItemElements = $(this).parent().find('.carousel-element:last-child');
			 	currentLeftValue += pixelsOffset;
				$(findItemElements).prependTo(findElementsList);
			});

			rightUIEl.click(function(event) {   
				var findElementsList = $(this).parent().find('.carousel-list');
				var findItemElements = $(this).parent().find('.carousel-element:first-child');
			 	currentLeftValue -= pixelsOffset;
			 	$(findItemElements).appendTo(findElementsList); 
			});

		
			return this.css('width', widthCarousel);
		},

	show : function() {
		
			var goSlider_1 = setInterval(startShowFirstSlider, 3500);
			var goSlider_2 = setInterval(startShowSecondSlider, 3500);
			var goSlider_3 = setInterval(startShowThirdSlider, 3500);

			function startShowFirstSlider() {
				$('.carousel-hider:nth-child(1)').find('.carousel-arrow-right').trigger('click');
			}

			function startShowSecondSlider() {
				$('.carousel-hider:nth-child(2)').find('.carousel-arrow-right').trigger('click');
			}

			function startShowThirdSlider() {
				$('.carousel-hider:nth-child(3)').find('.carousel-arrow-right').trigger('click');
			}

			

			var carouselHider = $('.carousel-hider');
			for (var i = 0; i < carouselHider.length; i++) {
				carouselHider[i].addEventListener("mouseover", highlightThis, true);
			}

			function highlightThis(event) {
				var target = event.target;
				var valueCount = this.dataset.count;
				var self = this;
				if (valueCount == 1) {
					clearInterval(goSlider_1);

					$(self).one('mouseout', function(event) {
						event.preventDefault();
						goSlider_1 = setInterval(startShowFirstSlider, 3500);
					});
					return;
				}

				if (valueCount == 2) {
					clearInterval(goSlider_2);

					$(self).one('mouseout', function(event) {
						event.preventDefault();
						goSlider_2 = setInterval(startShowSecondSlider, 3500);
					});
					
					return;
				}

				if (valueCount == 3) {
					clearInterval(goSlider_3);

					$(self).one('mouseout', function(event) {
						event.preventDefault();
						goSlider_3 = setInterval(startShowThirdSlider, 3500);
					});
				
					return;
				}
			}
	}

	}

	$.fn.carousel = function (method) {
		if ( methods[method] ) {
			return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
		} else if ( typeof method === 'object' || ! method ) {
        	return methods.init.apply( this, arguments );
    	} 



}

var windowWidth = $(window).width();
if (windowWidth <= 767) {
	
	$('.carousel-hider').carousel({countItem : 1,});
	$('.carousel-hider').carousel('show');
}

if (windowWidth >= 768 && windowWidth <=959) {
	$('.carousel-hider').carousel({countItem : 1,});
	$('.carousel-hider').carousel('show');
}

if (windowWidth >= 960) {
	$('.carousel-hider').carousel({countItem : 1,});
	$('.carousel-hider').carousel('show');
}

})(jQuery);


