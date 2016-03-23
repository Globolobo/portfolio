var path = require('path');
var express = require('express');
var app = express();

	app.use('/public',express.static('public'));
	app.use('/app',express.static('app'));
	app.use('/node_modules', express.static(path.resolve(__dirname, 'node_modules')));
	app.use(express.static('public/js'));

	app.get('/', function(req, res){
		console.log(__dirname);
		res.sendFile(path.resolve(__dirname, 'index.html'));
	});

	app.listen(3000, function () {
		console.log('listening on port 3000!');
	});
