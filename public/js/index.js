!function(e){"use strict";function t(){e(".carousel-arrow-right").trigger("click")}var i={all:[{option:[{step:"STEP 1",h:"Sed leo enim, condimentum",p:"Quisque libero libero, dictum non turpis in, luctus semper lorem. Donec rhoncus a leo sit amet facilisis.",clas:"carousel-element_1"},{step:"STEP 2",h:"Morbi velit risus",p:"Nulla venenatis tempor dui in molestie.Nulla quis dictum purus, sit amet porttitor est.",clas:"carousel-element_2"},{step:"STEP 3",h:"Sed leo enim, condimentum",p:"Quisque libero libero, dictum non turpis in, luctus semper lorem. Donec rhoncus a leo sit amet facilisis.",clas:"carousel-element_3"}]},{option:[{step:"STEP 2",h:"Morbi velit risus",p:"Nulla venenatis tempor dui in molestie.Nulla quis dictum purus, sit amet porttitor est.",clas:"carousel-element_2"},{step:"STEP 3",h:"Sed leo enim, condimentum",p:"Quisque libero libero, dictum non turpis in, luctus semper lorem. Donec rhoncus a leo sit amet facilisis.",clas:"carousel-element_3"},{step:"STEP 1",h:"Sed leo enim, condimentum",p:"Quisque libero libero, dictum non turpis in, luctus semper lorem. Donec rhoncus a leo sit amet facilisis.",clas:"carousel-element_1"}]},{option:[{step:"STEP 3",h:"Sed leo enim, condimentum",p:"Quisque libero libero, dictum non turpis in, luctus semper lorem. Donec rhoncus a leo sit amet facilisis.",clas:"carousel-element_3"},{step:"STEP 1",h:"Sed leo enim, condimentum",p:"Quisque libero libero, dictum non turpis in, luctus semper lorem. Donec rhoncus a leo sit amet facilisis.",clas:"carousel-element_1"},{step:"STEP 2",h:"Morbi velit risus",p:"Nulla venenatis tempor dui in molestie.Nulla quis dictum purus, sit amet porttitor est.",clas:"carousel-element_2"}]}]},s=e("#sl").text(),o=_.template(s);e(".carousel").append(o(i)),e(".carousel-arrow-left").on("click",function(t){t.preventDefault();var i=e(this).parent(),s=e(i).find(".carousel-list");e(i).find(".carousel-list li:last-child").prependTo(s)}),e(".carousel-arrow-right").on("click",function(t){t.preventDefault();var i=e(this).parent(),s=e(i).find(".carousel-list");e(i).find(".carousel-list li:first-child").appendTo(s)});var l=setInterval(t,2e3);e(".carousel-hider").hover(function(){clearInterval(l)},function(){l=setInterval(t,2e3)})}(jQuery),function(e){"use strict";e(".form_butn").on("click",function(t){t.preventDefault();var i=e(".form_input").val();e.getJSON("http://api.pixplorer.co.uk/image?word="+i+"&amount=7&size=tb",function(t){e(".list").remove();var i=e("#mason").text(),s=_.template(i);e(".masonry").append(s(t)),e(".form_input").val("")}),setTimeout(function(){e(".list").masonry({itemSelector:".list_item",columnWidth:51})},1500)}),e.getJSON("http://api.pixplorer.co.uk/image?&amount=7&size=tb",function(t){var i=e("#mason").text(),s=_.template(i);e(".masonry").append(s(t))}),setTimeout(function(){e(".list").masonry({itemSelector:".list_item",columnWidth:51})},1500)}(jQuery);