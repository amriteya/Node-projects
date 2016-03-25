var express = require('express');
var bodyParser = require('body-parser');


var app = express();
var port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

//routes
app.get('/api/users',function(req,res){
	var user_id = req.param('id');
	var token = req.param('token');
	var geo = req.param('geo');

	res.json({
		"id": user_id,
		"token": token,
		"geo": geo
	});
})

app.get('/api/:version',function(req,res){
	res.json({
		"version": req.params.version
	})
});

app.post('/api/users',function(req,res){
	var user_id = req.body.id;
	var token = req.body.token;
	var geo = req.body.geo;

	res.json({
		"id": user_id,
		"token": token,
		"geo": geo
	});	
})
//server start
app.listen(port);
console.log("Server running...");