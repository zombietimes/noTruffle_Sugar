const CONFIG = require('./CONFIG');
const config = new CONFIG();

const UTL = require(config.pathExpressJavascripts+'/UTL');
const utl = new UTL();
utl.removeFile(config.pathExpressJavascripts+'/build/contractAddress.json');
utl.removeFile(config.pathExpressJavascripts+'/build/contractAddress.js');

const fs = require('fs');
const byteCode = JSON.parse(fs.readFileSync(config.pathExpressJavascripts+'/build/byteCode.json').toString());
const contractABI = JSON.parse(fs.readFileSync(config.pathExpressJavascripts+'/build/contractABI.json').toString());
const ACCESSOR = require(config.pathExpressJavascripts+'/ACCESSOR');
const accessor = new ACCESSOR({
  blockchain:'#Ganashe',
  protocol:'#Websocket',
  platform:'#Nodejs',
});

(async ()=>{
  const accounts = await accessor.GetAccounts();
  console.log(accounts);
  const myContract = new accessor.web3.eth.Contract(contractABI);
  console.log(myContract);
  myContract.deploy({
    data: byteCode
  })
  .send({
    from: accounts[0],
    gas: 4700000
  },function(error,transactionHash){})
  .on('error', function(error){ console.log(error); })
  .on('transactionHash', function(transactionHash){ console.log(transactionHash); })
  .on('receipt', function(receipt){
     const contractAddress = receipt.contractAddress;
     const strContractAddress = JSON.stringify(contractAddress);
     fs.writeFileSync(config.pathExpressJavascripts+'/build/contractAddress.json',strContractAddress);
     fs.writeFileSync(config.pathExpressJavascripts+'/build/contractAddress.js','const contractAddressJs = {"body":'+strContractAddress+'};');
     console.log(contractAddress);
     console.log('Done.');
     console.log('[CTRL+C] Stop it by yourself.');
  });
})();

