var express = require('express')

var app = express()

app.get('/',function(req,res){
  res.render('index')
});

var listener = app.listen(65432, function() {
		console.log('Server started on ' + listener.address().port);
	});

var logger = function(req, res, next) {
		console.log(req.method, req.url);
		next();
	};