const CONFIG = require('./CONFIG');
const config = new CONFIG();

const UTL = require(config.pathExpressJavascripts+'/UTL');
const utl = new UTL();
utl.removeFile(config.pathExpressJavascripts+'/build/compiledCode.json');
utl.removeFile(config.pathExpressJavascripts+'/build/byteCode.json');
utl.removeFile(config.pathExpressJavascripts+'/build/contractABI.json');
utl.removeFile(config.pathExpressJavascripts+'/build/contractABI.js');

const solc = require('solc');
const fs = require('fs');
const contractFileName = config.contractNameCamel+'.sol';
const sourceCode = fs.readFileSync('./'+contractFileName).toString();
const sources = {};
sources[contractFileName] = {
  content: sourceCode
};
const input = {
  language: 'Solidity',
  sources: sources,
  settings: {
    outputSelection: {
      '*': {
        '*': ['*']
      }
    }
  }
};
const compiledCode = JSON.parse(solc.compile(JSON.stringify(input)));
const strCompiledCode = JSON.stringify(compiledCode);
fs.writeFileSync(config.pathExpressJavascripts+'/build/compiledCode.json',strCompiledCode);
console.log(compiledCode);

function getByteCode(compiledCode,contractNameCamel){
  const byteCode = compiledCode.contracts[contractFileName][contractNameCamel].evm.bytecode.object;
  return byteCode;
}
function getContractABI(compiledCode,contractNameCamel){
  const contractABI = compiledCode.contracts[contractFileName][contractNameCamel].abi;
  return contractABI;
}
const byteCode = getByteCode(compiledCode,config.contractNameCamel);
const contractABI = getContractABI(compiledCode,config.contractNameCamel);
const strByteCode = JSON.stringify(byteCode);
fs.writeFileSync(config.pathExpressJavascripts+'/build/byteCode.json',strByteCode);
const strContractABI = JSON.stringify(contractABI);
fs.writeFileSync(config.pathExpressJavascripts+'/build/contractABI.json',strContractABI);
fs.writeFileSync(config.pathExpressJavascripts+'/build/contractABI.js','const contractABIJs = {"body":'+strContractABI+'};');
console.log(byteCode);
console.log(contractABI);

