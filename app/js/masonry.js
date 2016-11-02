;(function ($) { 
	$.support.cors = true; 

	$.getJSON("http://api.pixplorer.co.uk/image?&amount=7&size=large", 
	function(data){ 
		var lodash = $('#mason').text(); 
		var tpl = _.template(lodash); 
		$('.masonry').append(tpl(data)); 
		}); 

	setTimeout(function () { 
		$(".list").masonry({ 
			itemSelector: ".list_item", 
			columnWidth: 2 
		}); 
	}, 2000); 


	$(".form_butn").click(function(event) { 
		event.preventDefault(); 
		var target = event.target; 
		var valueInput = $(".form_input").val(); 
		var removeValue = null; 
		$('.list').remove();
		if (valueInput.length === 0) { 
			return; 
		} 

	$.getJSON("http://api.pixplorer.co.uk/image?word="+valueInput+"&amount=7&size=large", 
	function(data){ 
		var lodash = $('#mason').text(); 
		var tpl = _.template(lodash); 
		$('.masonry').append(tpl(data)); 
	}); 

	setTimeout(function () { 
		$(".list").masonry({ 
			itemSelector: ".list_item", 
			columnWidth: 2 
		}); 
	}, 2000); 

	removeValue = $(".form_input").val(" "); 
	}); 


})(jQuery);

