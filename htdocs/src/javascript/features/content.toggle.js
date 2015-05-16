App.Features.contentToggle = (function(feature){

	feature.init = function(element) {
		/* Call functions to fire when the feature on init. */
		if (screen.width < 420) {
			$('.slide-div .dropdown').addClass('dropdown-arrowdown');
			var slideContent = $('.slide-content');
			var hrdivs = $('.slide-div hr');
			hrdivs.hide();
			slideContent.hide();

			$('.slide-div .divider').click(function() {
				$(this).parent().find('.slide-content').slideToggle('slow');
				$(this).find('.dropdown').toggleClass('dropdown-arrowdown dropdown-arrowup');
			});
		}
	}

	return feature;
}(App.Features.contentToggle || {}));
