var https = require('https');
var querystring = require('querystring');

function accountExists(email) {
	var emails = ['you@gmail.com', 'admin@gmail.com', 'quang@gmail.com'];
	return emails.indexOf(email) > -1;
}

var server = https.createServer(function (req, res) {
	var params = req.url.split('?')[1];
	var data = querystring.parse(params);
	var email = data.email;

	res.statusCode = 200;
	res.setHeader("Content-Type", "application/json");
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-Width, Content-Type, Accept");

	if (accountExists(email)) {
		res.write('""');
	}
	else {
		res.write("true");
	}
	res.end();
});

server.listen(3000);