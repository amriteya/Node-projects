var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
	name: String,
	username: {type: String, required: true, unique: true},
	password: {type: String, required: true},
	admin: Boolean,
	location: String,
	meta:{
		age: Number,
		website: String
	},
	created_at: Date,
	update_at: Date
});



userSchema.methods.encrypt = function(){

	function encryptPassword(pass){

		//Encryption logic comes here!

		return pass;
	}

	this.password = encryptPassword(this.password);
};

userSchema.pre('save',function(next){

	var currentDate = new Date();
	this.update_at = currentDate;

	if(!this.created_at)
		this.created_at = currentDate;

	
});
var User = mongoose.model('User',userSchema);

module.exports = User;
