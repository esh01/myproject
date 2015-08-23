var fs=require('fs');
var http =require('http');
var url =require('url');

http.createServer(function(request,response){
	var pathname= url.parse(request.url).pathname;
	
	if(pathname=='/'){
		fs.readFile('index.html',function(error,data){
			response.writeHead(200,{'Content-Type':'text/html'});
			response.end(data);
		});
		
	}else if(pathname=='/OtherPage'){
		fs.readFile('OtherPage.html',function(error,data){
			response.writeHead(200,{'Content-Type':'text/html'});
			response.end(data);
		});
		
	}
	
}).listen(1337, function(){
	console.log('Server Running at http://127.0.0.1:1337');
});
