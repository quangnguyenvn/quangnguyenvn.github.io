// 1. PACKAGING MASSAGE REMIND METHOD

var message = {

	init: function () {

		/*-----------ERROR CHECKING----------*/
		$.validator.setDefaults({
			highlight: function (element) {
				$(element)
					.addClass('has-error');
			},

			unhighlight: function (element) {
				$(element)
					.removeClass('has-error');
			},
		});


		/*-----------ADD STRONG PASSWORD METHOD----------*/

		$.validator.addMethod("strongPassword", function (value, element) {
			return this.optional(element) || value.length >= 6
				&& /\d/.test(value)
				&& /[a-z]/i.test(value);
		}, "Mật khẩu dài ít nhất 6 ký tự, chứa ít nhất 1 số và 1 chữ cái.");

		$("#register-form").validate({
		/*--------- SETTING RULES FOR VALIDATING-----------*/
			rules: {
				email: {
					required: true,
					email: true,
		/*--------- REMOTED SERVER-----------*/
					remote: 'https://quangnguyenvn.github.io:3000/'
				},
				password: {
					required: true,
					strongPassword: true,
				},
				password2: {
					required: true,
					equalTo: "#password",
				},
				firstName: {
					required: true,
					nowhitespace: true,
					lettersonly: true,
				},
				secondName: {
					required: true,
					nowhitespace: true,
					lettersonly: true,
				}
			},


			/*-----------MASSAGE AREA--------------*/
			messages: {
				email: {
					required: "Nhập địa chỉ email.",
					email: "Vui lòng điền địa chỉ email hợp lệ.",
					remote: $.validator.format("{0} is already associated with an account."),
				},
				password: {
					required: "Tạo mật khẩu đăng nhập.",
				},
				password2: {
					required: "Nhập lại mật khẩu.",
					equalTo: "Vui lòng nhập lại đúng mật khẩu.",
				},
				firstName: {
					required: "Nhập tên.",
					nowhitespace: "Tên đăng ký không được chứa khoảng trắng.",
					lettersonly: "Tên đăng ký chỉ bao gồm chữ cái tiếng Anh.",
				},
				secondName: {
					required: "Nhập tên họ.",
					nowhitespace: "Tên họ không được chứa khoảng trắng.",
					lettersonly: "Tên họ chỉ bao gồm chữ cái tiếng Anh.",
				}
			},
		});
	}
}

// INIT METHOD

message.init();

// 2. PACKING VALIDATE INFORMATION METHOD

var validate = {
	start: function () {

		var email = document.getElementById('email').value;
		var password = document.getElementById('password').value;
		var email = document.getElementById('email').value;
		var password = document.getElementById('password').value;
		var password2 = document.getElementById('password2').value;
		var firstName = document.getElementById('firstName').value;
		var secondName = document.getElementById('secondName').value;


		// CHECK IF EMAIL FALSE
		if (email == "" || !email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
			console.log("email false");
			return false;
		}

		// CHECK IF PASSWORD FALSE

		if (password == "" || password.length < 6 || !password.match(/\d/) || !password.match(/[a-z]/i)) {
			console.log("password false");
			return false;
		}

		// CHECK IF PASSWORD2 FALSE
		if (password2 == "" || password2 != password) {
			console.log("password2 false");
			return false;
		}
		// CHECK FIRSTNAME FALSE
		if (firstName == "" || !firstName.match(/^[a-zA-Z\s]*$/) || firstName.match(/^ *$/)) {
			console.log("firstname false");
			return false;
		}
		// CHECK IF SECONDNAME FLASE
		if (secondName == "" || !secondName.match(/^[a-zA-Z\s]*$/) || secondName.match(/^ *$/)) {
			console.log("second name false");
			return false;
		}
		// OK
		else {
			return true;

		}
	}
}

// START METHOD

function check_register() {

	validate.start();
}
