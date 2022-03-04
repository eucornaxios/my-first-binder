
var http = require("http");

var server = http.createServer(function (response,request){
                               
                               var body = "Hello World!";
    response.writeHead(200, { 
        'Content-Length': body.length,
        'Content-Type': 'text/plain'
    });
    
    
    response.end(body);
    
});

server.listen(8080);
