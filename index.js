
var http = require("http");

 http.createServer(function (teq, res) {
      res.writeHead(200, {'Content-Type':
    'text/html'});
        res.end("Hello Wirld!");
}).listen(8080);
