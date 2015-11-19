var https = require('http');

https.createServer(function firsttry (request, response) 
{
	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.end('Hello Trash\nAnd Hello people');
}).listen(8080);

console.log('Server started');