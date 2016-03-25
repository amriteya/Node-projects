var express = require('express');
var app = express();

var port = process.env.PORT || 8080;


app.get('/sample', function(req,res){
	res.send('This is simple\n');
});


var router = express.Router();

router.use(function(req,res,next){
	console.log(req.method,req.url,req.headers);

	next();
});

router.get('/',function(req,res){
	res.send('I am the home page\n');
});

router.get('/about',function(req,res){
	console.log('About page\n');
	res.send('About page\n');
});


router.param('name',function(req,res,next,name){
	console.log("name "+name+" is clear\n");

	req.name = name;

	next();
})

router.get('/hello/:name',function(req,res){
	res.send('Hello '+req.name+"!\n");
})
app.use('/app',router);

app.listen(port);
console.log("Server is running on port "+port+"...");