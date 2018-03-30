/* Import required modules. */
const http = require('http');
const fs = require('fs');

/* Create a http server. */
http.createServer(function(req, res){
	var url = req.url;
	switch(url) {
		case '/': getStaticView(res, 'view/index.html', 'text/html');
			break;
	}
}).listen(4300);
console.log("Hell yea!");

/* Read static html file. */
function getStaticView(res, filePath, contentType){
	fs.readFile(filePath, function(err, data){
		if(err) { 
			res.writeHeader(500, {'Content-Type': 'text/plain'});
			res.end('Status code: 500. File not found - Internal server error.');
		}

		if(data) {
			res.writeHead(200, {'Content-Type': 'text/html'});
			res.end(data);
		}
	});
}

