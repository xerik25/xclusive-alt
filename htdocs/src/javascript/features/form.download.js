App.Features.formDownload = (function(feature){

	feature.init = function(element) {
		/* Call functions to fire when the feature on init. */
		document.getElementById("form-download-btn").addEventListener("click", formDownload);

		function formDownload () {
			var name = document.getElementById('form-download-name');
			var email = document.getElementById('form-download-email');
			var company = document.getElementById('form-download-company');
			var atpos = email.value.indexOf("@");
			var dotpos = email.value.lastIndexOf(".");

			name.style.border = "1px solid #ccc";
			company.style.border = "1px solid #ccc";
			email.style.border = "1px solid #ccc";

			if (name.value === "") {
				name.style.border = "red 2px solid";
				return false;
			} 
			if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=email.value.length) {
				email.style.border = "red 2px solid";
				return false;
			}
			if (company.value === "") {
				company.style.border = "red 2px solid";
				return false;
			} 
			else {
				alert("Success");
				// $.ajax({
				//   type: 'post',
				//   url: '',
				//   data: $('#form-download').serialize(),
				//   success: function () {
				//     $("#form-download")[0].reset();
				//   },
				//   error: function () {
				//   }
				// });
			}
		}
	}
 
	return feature;
}(App.Features.formDownload || {}));