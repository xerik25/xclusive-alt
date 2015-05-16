App.Features.carouselSlider2 = (function(slider){

	slider.init = function(element) {
		/* Call functions to fire when the feature on init. */
		$(".carousel-slider-2 .content-wrapper").hover(function(){
			$(".carousel-slider-2 .content-wrapper").css("opacity","0.3");
			$(this).css("opacity","1");
		}, function(){
			$(".content-wrapper").css("opacity","1");
		});
	}

	return slider;
}(App.Features.carouselSlider2 || {}));
