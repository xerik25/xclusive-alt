App.Features.formSubscribe = (function(feature){

	feature.init = function(element) {
		/* Call functions to fire when the feature on init. */
		var submitBtn = $("#form-subscribe-btn");
		submitBtn.on("click", formSubscribe);
		$(".subscribe-form-success .fix-link").on("click", returnToForm);

		function formError(response) {
			var errorDiv = element.siblings('.subscribe-form-error');
			errorDiv.removeClass('hide');
			errorDiv.append(response.statusText);
		}

		function returnToForm(e) {
			e.preventDefault();
			
			element.siblings('.subscribe-form-success').hide();
			element.show();
		}

		function formSubscribe (e) {
			e.preventDefault();

			var name = $('[name=Name]');
			var email = $('[name=Email]');
			var company = $('[name=PharmacyName]');
			var atpos = email.val().indexOf("@");
			var dotpos = email.val().lastIndexOf(".");

			name.css("border", "1px solid #ccc");
			company.css("border", "1px solid #ccc");
			email.css("border", "1px solid #ccc");

			if (name.val() === "") {
				name.css("border", "red 2px solid");
				return false;
			} 
			if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=email.val().length) {
				email.css("border", "red 2px solid");
				return false;
			}
			if (company.val() === "") {
				company.css("border", "red 2px solid");
				return false;
			} 

			// collect form data into object
			submitBtn.attr("disabled");
			var formData = {};
			$('input,select,textarea', element).each(function() {
				formData[$(this).attr('name')] = $(this).val();
			});

			$.ajax({
				type: 'post',
				url: '/ScriptPro/Services/Subscription.ashx',
				data: { form: JSON.stringify(formData) },
				success: function (response) {
					console.log("success", response);
					submitBtn.removeAttr("disabled");

					if (response.success) {
						element.hide();
						element.siblings('.subscribe-form-success').removeClass('hide');

						$(".email", element.siblings('.subscribe-form-success')).html(formData.Email);
					}
					else {
						formError(response);
					}
				},
				error: function (response) {
					console.log("error", response);
					submitBtn.removeAttr("disabled");
					formError(response);
				}
			});
		}
	}
 
	return feature;
}(App.Features.formSubscribe || {}));