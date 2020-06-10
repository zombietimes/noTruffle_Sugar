const CONFIG = function(){
  this.contractNameLower = '@contractNameLower';
  this.contractNameCamel = '@contractNameCamel';
  this.pathProject = '@pathProject';
  this.pathExpressJavascripts = '@pathExpressJavascripts';
};

var module = module || undefined;
if(module !== undefined){
  module.exports = CONFIG;
}


