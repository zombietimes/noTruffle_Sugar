var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});

const fs = require('fs');
var ZTIMES = ZTIMES || {};
ZTIMES.LIB = {
  init: function(){
    // Contract
    const CONFIG = require('./CONFIG');
    const config = new CONFIG();
    this.contractABI = JSON.parse(fs.readFileSync(config.pathExpressJavascripts+'/build/contractABI.json').toString());
    this.contractAddress = JSON.parse(fs.readFileSync(config.pathExpressJavascripts+'/build/contractAddress.json').toString());
    console.log(this.contractAddress);

    // Web3.js
    const ACCESSOR = require(config.pathExpressJavascripts+'/ACCESSOR');
    this.accessor = new ACCESSOR({
      blockchain:'#Ganashe',
      protocol:'#Websocket',
      platform:'#Nodejs',
    });
    // Socket.io
    const SOCKETIO_SERVER = require(config.pathExpressJavascripts+'/SOCKETIO_SERVER');
    this.socketioServer = new SOCKETIO_SERVER();
    // OpenPGP
    const PGP = require(config.pathExpressJavascripts+'/PGP');
    this.pgp = new PGP({
      platform:'#Nodejs',
    });
  },
};
ZTIMES.SELLER = {
  message: "I am a zombie.",
  init: function(){
    this.watchEvent();
  },
  GetMessage: async function(publicKeyArmored){
    const encrypted = await ZTIMES.LIB.pgp.Encrypt({
        message: this.message,
        publicKeyArmored: publicKeyArmored
    });
    return encrypted;
  },
  watchEvent: async function(){
    const instance = await ZTIMES.LIB.accessor.GetContract(ZTIMES.LIB.contractABI,ZTIMES.LIB.contractAddress);
    instance.events.Payment({},function(error,event){})
    .on('data', async function(event){
      const publicKeyPgp = event.returnValues.publicKeyPgp;
      const encrypted = await ZTIMES.SELLER.GetMessage(publicKeyPgp);
      ZTIMES.LIB.socketioServer.SendEncryptedData(encrypted);
    })
    .on('error', console.error);
  },
};
ZTIMES.RUN = {
  init: function(){
    ZTIMES.LIB.init();
    ZTIMES.SELLER.init();
  },
};
ZTIMES.RUN.init();

module.exports = router;
