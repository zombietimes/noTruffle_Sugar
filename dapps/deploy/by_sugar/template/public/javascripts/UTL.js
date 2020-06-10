
const UTL = function(params){
};
UTL.prototype.getCases = function(nameOrg){
  const upperCase = nameOrg.toUpperCase();
  const lowerCase = nameOrg.toLowerCase();
  const camelCase = lowerCase[0].toUpperCase()+lowerCase.slice(1);
  const result = {
    upperCase: upperCase,
    lowerCase: lowerCase,
    camelCase: camelCase,
  };
  return result;
}
UTL.prototype.getPathExpressJavascripts = function(parentDir,contractNameL){
  const pathExpressJavascripts = parentDir+contractNameL+'/public/javascripts/';
  return pathExpressJavascripts;
}
const fs = require('fs');
UTL.prototype.removeFile = function(path){
  try{
    fs.unlinkSync(path);
  }
  catch(error){
  }
}

var module = module || undefined;
if(module !== undefined){
  module.exports = UTL;
}


