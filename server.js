var http = require('http')
var os = require("os");

var port = process.env.PORT || 8080;
var message = process.env.MESSAGE || "Hello world!";

var server = http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'})
  var msg = JSON.stringify({
      message: message,
      platform: os.type(),
      release: os.release(),
      hostName: os.hostname()
  })
  response.end(msg+'\n')
})

server.listen(port)

console.log('Server running at http://localhost:' + port)
