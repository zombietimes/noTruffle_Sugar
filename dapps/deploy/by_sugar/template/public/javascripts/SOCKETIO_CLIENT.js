
const SOCKETIO_CLIENT = function(params){
  this.socket = io.connect("http://localhost:8000");
  this.emit = function(name,data){
    this.socket.emit(name,JSON.stringify(data));
  }
};
SOCKETIO_CLIENT.prototype.Send = function(key,value){
  this.emit(key,{text:value});
}
SOCKETIO_CLIENT.prototype.Recv = function(key,act){
  this.socket.on(key,act);
}

var module = module || undefined;
if(module !== undefined){
  module.exports = SOCKETIO_CLIENT;
}


