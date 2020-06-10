
const SOCKETIO_SERVER = function(params){
  const http = require('http');
  const server = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type':'text/html'});
    res.end('server connected');
  });
  this.io = require('socket.io').listen(server);
  server.listen(8000);
  this.io.sockets.on('connection', function (socket) {
    console.log('connected!');
  });
};
SOCKETIO_SERVER.prototype.SendEncryptedData = function(encrypted){
  const data = JSON.stringify({"text":encrypted});
  // console.log(data);
  this.io.emit('loadData',data);
}

var module = module || undefined;
if(module !== undefined){
  module.exports = SOCKETIO_SERVER;
}


