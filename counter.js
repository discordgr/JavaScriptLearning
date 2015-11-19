var http = require('http');

var userCount = 0;
http.createServer(function firsttry (request, response) 
{
	console.log('New connection');
	userCount++
	
	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.write('Hello!\n');
	response.write('We have had ' + userCount + ' visits!\n');
	response.end('Say Welcome to ' + userCount +	' Trashes');
}).listen(8080);

console.log('Server started bitch');