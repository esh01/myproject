var http = require('http');

http.createServer(function (request,response){
	response.writeHead(404);
	response.end();
}).listen(1337, function(){
	console.log('Running Server');
})