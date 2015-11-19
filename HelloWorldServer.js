var http = require('http');
http.createServer(function (request, responce)
{
	responce.writeHead(200, {'content-Type':'text/plain'});
	responce.end('Hello,World!\n');
}).listen(8080);

console.log('server Started!');
