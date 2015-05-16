App.Features.formContact = (function(feature){

	feature.init = function(element) {
		/* Call functions to fire when the feature on init. */
		var submitBtn = $("#form-contact-btn", element);
		submitBtn.on("click", formContact);

		function formError(response) {
			var errorDiv = element.siblings('.contact-form-error');
			errorDiv.removeClass('hide');
			errorDiv.append(response.statusText);
		}

		function formReset() {
			$("input,select,checkbox,textarea", element).val('');
		}

		function formContact (e) {
			e.preventDefault();

			var name = $('#form-contact-name', element);
			var email = $('#form-contact-email', element);

			// validation
			name.css('border', "1px solid #ccc");
			email.css('border', "1px solid #ccc");

			if (name.val() === "") {
				name.css('border', "red 2px solid");
				return false;
			} 
			if (email.val().indexOf("@") < 0) {
				email.css('border', "red 2px solid");
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
				url: '/ScriptPro/Services/MoreInformation.ashx',
				data: { form: JSON.stringify(formData) },
				success: function (response) {
					console.log("success", response);
					submitBtn.removeAttr("disabled");

					if (response.success) {
						formReset();
						element.hide();
						element.siblings('.contact-form-success').removeClass('hide');
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
}(App.Features.formContact || {}));