App.Features.formComparison = (function(feature){

	feature.init = function(element) {
		/* Call functions to fire when the feature on init. */
		var submitBtn =  $("#form-comparison-btn");
		submitBtn.on("click", formComparison);

		function formError(response) {
			var errorDiv = $('.comparison-form-error', element);
			errorDiv.removeClass('hide');
			errorDiv.append(response.statusText);
		}

		function formReset() {
			$("input,select,checkbox,textarea", element).val('');
		}

		function formComparison (e) {
			e.preventDefault();

			var name = $('#form-comparison-name');
			var email = $('#form-comparison-email');
			var company = $('#form-comparison-company');
			var atpos = email.val().indexOf("@");
			var dotpos = email.val().lastIndexOf(".");

			// validation
			name.css('border', "1px solid #ccc");
			company.css('border', "1px solid #ccc");
			email.css('border', "1px solid #ccc");

			if (name.val() === "") {
				name.css('border', "red 2px solid");
				return false;
			} 
			if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=email.val().length) {
				email.css('border', "red 2px solid");
				return false;
			}
			if (company.val() === "") {
				company.css('border', "red 2px solid");
				return false;
			} 
			
			submitBtn.attr("disabled");

			// collect checked products
			var productsChecked = [];
			$("input[type=checkbox]", element).each(function() {
				if ($(this).is(":checked")) {
					productsChecked.push($(this).val());
				}
			});

			// collect form data into object
			var formData = {};
			$("input[name=Subject]", element).val("Product comparison request: " + productsChecked.join(","));
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
						$('#form-comparison', element).hide();
						$('.comparison-form-success', element).removeClass('hide');
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
}(App.Features.formComparison || {}));