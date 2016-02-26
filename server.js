var http = require('http'),
    fs = require('fs');

var port = 8000;

http.createServer(function(req ,res){
  res.writeHead(200, {
    'Content-Type' : 'text/html',
    'Access-Control-Allow-Origin' : '*'
  });

  var readStream = fs.createReadStream(__dirname + '/index.html');
  readStream.pipe(res);

}).listen(port);

console.log("Node serving at http://localhost:"+port);
