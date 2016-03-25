var http = require('http');

var EventEmitter = require('events').EventEmitter;

var port = process.env.PORT || 8080;

console.log(typeof(EventEmitter)+"\n\n");

http.createServer(function(request, response){
	response.writeHead(200);

	// request.pipe(response);
	response.write("Hello,this is dog");
	response.end();
}).listen(port);

// var d = new EventEmitter();

// console.log(typeof(d));


// d.on('Even', function(){
// 	console.log("even");
// });

// d.on('Odd', function(value){
// 	console.log(value);
// });
// var a = 15;

// if( a % 2 == 0)
// 	d.emit('Even');
// else
// 	d.emit('Odd','hello');


console.log('Listening on port 8888...');