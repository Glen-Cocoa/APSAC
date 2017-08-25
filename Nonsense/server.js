var express = require('express');
var Parser = require('./parse.js');
var xlsxLib = require('./xlsx.full.min.js');

var app = express()

app.get('/',function(req,res){
	return Parser()
});

	var logger = function(req, res, next) {
		console.log(req.method, req.url);
		next();
	};

var listener = app.listen(4200, function() {
		console.log('Server started on ' + listener.address().port);
	});