!function(e){"use strict";function t(){e(".carousel-arrow-right").trigger("click")}var i={all:[{option:[{step:"STEP 1",h:"Sed leo enim, condimentum",p:"Quisque libero libero, dictum non turpis in, luctus semper lorem. Donec rhoncus a leo sit amet facilisis.",clas:"carousel-element_1"},{step:"STEP 2",h:"Morbi velit risus",p:"Nulla venenatis tempor dui in molestie.Nulla quis dictum purus, sit amet porttitor est.",clas:"carousel-element_2"},{step:"STEP 3",h:"Sed leo enim, condimentum",p:"Quisque libero libero, dictum non turpis in, luctus semper lorem. Donec rhoncus a leo sit amet facilisis.",clas:"carousel-element_3"}]},{option:[{step:"STEP 2",h:"Morbi velit risus",p:"Nulla venenatis tempor dui in molestie.Nulla quis dictum purus, sit amet porttitor est.",clas:"carousel-element_2"},{step:"STEP 3",h:"Sed leo enim, condimentum",p:"Quisque libero libero, dictum non turpis in, luctus semper lorem. Donec rhoncus a leo sit amet facilisis.",clas:"carousel-element_3"},{step:"STEP 1",h:"Sed leo enim, condimentum",p:"Quisque libero libero, dictum non turpis in, luctus semper lorem. Donec rhoncus a leo sit amet facilisis.",clas:"carousel-element_1"}]},{option:[{step:"STEP 3",h:"Sed leo enim, condimentum",p:"Quisque libero libero, dictum non turpis in, luctus semper lorem. Donec rhoncus a leo sit amet facilisis.",clas:"carousel-element_3"},{step:"STEP 1",h:"Sed leo enim, condimentum",p:"Quisque libero libero, dictum non turpis in, luctus semper lorem. Donec rhoncus a leo sit amet facilisis.",clas:"carousel-element_1"},{step:"STEP 2",h:"Morbi velit risus",p:"Nulla venenatis tempor dui in molestie.Nulla quis dictum purus, sit amet porttitor est.",clas:"carousel-element_2"}]}]},l=e("#sl").text(),o=_.template(l);e(".carousel").append(o(i)),e(".carousel-arrow-left").on("click",function(t){t.preventDefault();var i=e(this).parent(),l=e(i).find(".carousel-list");e(l).fadeOut(700,function(){e(i).find(".carousel-list li:last-child").prependTo(l)}),e(l).fadeIn(700)}),e(".carousel-arrow-right").on("click",function(t){t.preventDefault();var i=e(this).parent(),l=e(i).find(".carousel-list");e(l).fadeOut(700,function(){e(i).find(".carousel-list li:first-child").appendTo(l)}),e(l).fadeIn(700)});var s=setInterval(t,4300);e(".carousel-hider").hover(function(){clearInterval(s)},function(){s=setInterval(t,4300)})}(jQuery),function(e){e.support.cors=!0,e.getJSON("http://api.pixplorer.co.uk/image?&amount=7&size=large",function(t){var i=e("#mason").text(),l=_.template(i);e(".masonry").append(l(t))}),setTimeout(function(){e(".list").masonry({itemSelector:".list_item",columnWidth:2})},2e3),e(".form_butn").click(function(t){t.preventDefault();var i=(t.target,e(".form_input").val()),l=null;e(".list").remove(),0!==i.length&&(e.getJSON("http://api.pixplorer.co.uk/image?word="+i+"&amount=7&size=large",function(t){var i=e("#mason").text(),l=_.template(i);e(".masonry").append(l(t))}),setTimeout(function(){e(".list").masonry({itemSelector:".list_item",columnWidth:2})},2e3),l=e(".form_input").val(" "))})}(jQuery);