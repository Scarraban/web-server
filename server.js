var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

var middleware = require('./middleware');

// INIT THE LOGGER
app.use(middleware.logger);

// ABOUT PAGE
app.get('/about', middleware.requireAuthentication, function(req, res) {
	res.send('About Us');
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function() {
	console.log('Listening on port ' + PORT);
});