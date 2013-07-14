var fs = require('fs');

var express = require('express');

var app = express.createServer(express.logger());
var content = fs.readFile('index.html');
var buffer = new Buffer(content, "utf-8")
app.get('/', function(request, response) {
  response.send(buffer.toStrin());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
