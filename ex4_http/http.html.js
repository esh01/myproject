var fs=require('fs');
var http =require('http');

http.createServer(function(request,response){
	//html 읽기
	fs.readFile('HTMLPage.html',function(error,data){
		response.writeHead(200,{'Content-Type':'text/html'});
		response.end(data);
	});
	
}).listen(1337, function(){
	console.log('Server Running at http://127.0.0.1:1337');
});
