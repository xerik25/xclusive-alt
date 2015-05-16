App.Features.scrollToTop = (function(scroll){

	scroll.init = function(element) {
		// Call functions to fire when the feature on init. 
		// Check to see if the window is top if not then display button
		$(window).scroll(function(){
			if ($(this).scrollTop() > 1000) {
				$('.scrollToTop').fadeIn();
			} else {
				$('.scrollToTop').fadeOut();
			}
		});
		
		//Click event to scroll to top
		$('.scrollToTop').click(function(){
			$('html, body').animate({scrollTop : 0},800);
			return false;
		});
	}
 
	return scroll;
}(App.Features.scrollToTop || {}));