var http = require('http');

var server = http.createServer(function(request, response) {
				response.writeHead(200, { 'Content-Type': 'text/plain'});
				response.end('Now the application is ready to pick live code updates.'); //sends data to client
			});

server.listen(3000, function() {
	console.log("Server started on port 3000");
});


