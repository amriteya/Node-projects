var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Bear = require('./app/models/bear');



mongoose.connect('mongodb://localhost:27017/mongooseTrial');


var db = mongoose.connection;

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

var port = 8888;

var router = express.Router();

db.on('error', console.error.bind(console, 'connection error:'));

router.use(function(req,res,next){
	console.log("API called");
	next();
});

router.get('/',function(req,res){
	//console.log("I am here!");
	res.json({ message: 'Node api!'});
});

router.route('/bears')
	.post(function(req,res){
		var bear = new Bear();
		bear.name = req.body.name;

		bear.save(function(err){
			if(err)
				res.send(err);

			res.json({message: 'Bear Created!'});
		})
	})
	.get(function(req,res){
		Bear.find(function(err,bears){
			if(err)
				res.send(err);
			res.json(bears);
		})
	})

app.use('/api', router);

app.listen(port);
console.log('Server running');