App.Features.fadeInTransition = (function(fading){
 
	fading.init = function(element) {
		/* Call functions to fire when the fading on init. */
		$(window).scroll( function(){
			$('.hideme').each( function(i){
				var top_of_object = $(this).position().top;
				var bottom_of_window = $(window).scrollTop() + $(window).height();
				if( bottom_of_window > top_of_object ){
					$(this).animate({'opacity':'1'},1200);
				}
			}); 
		});
	}
 
	return fading;
}(App.Features.fadeInTransition || {}));