
const PGP = function(params){
  if(params.platform === '#Nodejs'){
    this.openpgp = require('openpgp');
  }
  else{
    this.openpgp = openpgp;
  }
};
PGP.prototype.GenerateKey = async function(params){
  const key = await this.openpgp.generateKey({
    userIds: [{name:params.name,email:params.email}],
    rsaBits: 4096,
    passphrase: params.passphrase
  });
  return key;
}
PGP.prototype.ShowKey = function(key){
  console.log("privateKeyArmored");
  console.log(key.privateKeyArmored);
  console.log("publicKeyArmored");
  console.log(key.publicKeyArmored);
  console.log("revocationCertificate");
  console.log(key.revocationCertificate);
}
PGP.prototype.GetPrivateKey = async function(params){
  const { keys: [privateKey] } = await this.openpgp.key.readArmored(params.privateKeyArmored);
  await privateKey.decrypt(params.passphrase)
  return privateKey;
}
PGP.prototype.Encrypt = async function(params){
  const { data: encrypted } = await this.openpgp.encrypt({
    message: this.openpgp.message.fromText(params.message),
    publicKeys: (await this.openpgp.key.readArmored(params.publicKeyArmored)).keys
  });
  return encrypted;
}
PGP.prototype.Decrypt = async function(params){
  const { data: decrypted } = await this.openpgp.decrypt({
    message: await this.openpgp.message.readArmored(params.encrypted),
    privateKeys: [params.privateKey]
  });
  return decrypted;
}

var module = module || undefined;
if(module !== undefined){
  module.exports = PGP;
}


