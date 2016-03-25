var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mongooseTrial')

var db = mongoose.connection;

var User = require('./user');

var amriteya = new User({
	name: 'New name',
	username: 'hello',
	password: 'test'
});

var newUser = new User({
	name: 'Harry Potter',
	username: 'potter',
	password: 'password',
	admin: true
});

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
	console.log("here");
	amriteya.encrypt(function(err,name){
		if (err)
			console.log(err);

		console.log('Your password has been encrypted');
	});
 	
 	amriteya.save(function(err){
 		console.log("is");
 		if(err)
 			console.log(err);
 	});

 	newUser.save(function(err){

 		if(err)
 			console.log(err);
 		else
 			console.log('User saved succesfully');
 	})



 	//
});