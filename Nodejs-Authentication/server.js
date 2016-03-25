var express = require('express');
var app = express();

var port = process.env.PORT || 8888;
var mongoose = require('mongoose');
var passport = require('passport');
var flash = require('connect-flash');

var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

var configDB = require('./config/database.js');

mongoose.connect(configDB.url);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
// require('./config/passport')(passport);

app.use(morgan('dev'));
app.use(cookieParser);
app.use(bodyParser());

app.set('view engine','ejs');

console.log("anything!!!");


app.use(session({ secret: 'amriteyapandey'}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

require('./app/routes.js')(app, passport);

app.listen(port);
console.log("Server running...");