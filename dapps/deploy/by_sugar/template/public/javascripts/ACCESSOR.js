
const BLOCKCHAIN_GANACHE = function(params){
  console.log('<Ganache>');
  const accessUrl = 'http://127.0.0.1:7545';
  if(params.platform === '#Nodejs'){
    Web3 = require('web3');
  }
  const provider = ACCESSOR.prototype.getProvider(params,Web3,accessUrl);
  this.web3 = new Web3(provider);
}

const ACCESSOR = function(params){
  this.providers = {};
  this.providers['#Ganashe'] = new BLOCKCHAIN_GANACHE(params);
  if(this.providers[params.blockchain] === undefined){
    return;
  }
  const accessor = this.providers[params.blockchain];
  this.web3 = accessor.web3;
};
ACCESSOR.prototype.getProvider = function(params,Web3,accessUrl){
  if(params.protocol === '#Websocket'){
    const provider = new Web3.providers.WebsocketProvider(accessUrl);
    return provider;
  }
  else{
    const provider = new Web3.providers.HttpProvider(accessUrl);
    return provider;
  }
}
ACCESSOR.prototype.GetContract = async function(contractABI,contractAddress){
  const accounts = await this.web3.eth.getAccounts();
  const contract = new this.web3.eth.Contract(contractABI,contractAddress,{from:accounts[0]});
  return contract;
};
ACCESSOR.prototype.GetAccounts = async function(){
  const accounts = await this.web3.eth.getAccounts();
  return accounts;
};
ACCESSOR.prototype.GetWeb3 = async function(){
  return this.web3;
}

var module = module || undefined;
if(module !== undefined){
  module.exports = ACCESSOR;
}


