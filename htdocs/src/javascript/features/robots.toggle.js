App.Features.robotsToggle = (function(feature){

	feature.init = function(element) {
		/* Call functions to fire when the feature on init. */
		if (screen.width < 420) {
			$('.robots-div .dropdown').addClass('dropdown-plus');
			var robotsContent = $('.robots-content');
			robotsContent.hide();

			$('.robots-div .divider').click(function() {
				$(this).parent().find('.robots-content').slideToggle('slow'); 
				$(this).find('.dropdown').toggleClass('dropdown-minus dropdown-plus');
			});
		}
	}
 
	return feature;
}(App.Features.robotsToggle || {}));