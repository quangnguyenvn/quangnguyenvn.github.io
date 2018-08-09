
// PACKAGING SUBMIT METHOD

var submit = {

    begin: function () {

        function getParameterByName(name, url) {
            if (!url) url = window.location.href;
            name = name.replace(/[\[\]]/g, '\\$&');
            var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
                results = regex.exec(url);
            if (!results) return null;
            if (!results[2]) return '';
            return decodeURIComponent(results[2].replace(/\+/g, ' '));
        }

        var email = getParameterByName('email');
        var password = getParameterByName('password');
        var firstName = getParameterByName('firstName');
        var secondName = getParameterByName('secondName');

        $("#email_span").append(email);
        $("#password_span").append(password);
        $("#firstName_span").append(firstName);
        $("#secondName_span").append(secondName);

    }
}

// BEGIN METHOD

submit.begin();