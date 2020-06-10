
var ZTIMES = ZTIMES || {};
ZTIMES.LIB = {
  init: async function(){
    // Contract
    this.contractABI = contractABIJs.body;
    this.contractAddress = contractAddressJs.body;
    // Web3.js
    this.accessor = new ACCESSOR({
      blockchain:'#Ganashe',
      protocol:'#Http',
      platform:'#Browser',
    });
    // Socket.io
    this.socketioClient = new SOCKETIO_CLIENT();
    // OpenPGP
    this.pgp = new PGP({
      platform:'#Browser',
    });
  },
};
ZTIMES.BUYER = {
  init: async function(){
    this.textArea = document.getElementById("iText");
    document.getElementById("iBtnPayment").addEventListener('mouseup',async function(){
      await ZTIMES.BUYER.payment();
      await ZTIMES.BUYER.load();
      console.log("Done.");
    },false);
    this.params = {name:"BUYER",email:"BUYER@gmail.com",passphrase:"I am BUYER."};
    this.key = await ZTIMES.LIB.pgp.GenerateKey(this.params);
    this.publicKeyArmored = this.key.publicKeyArmored;
    ZTIMES.LIB.socketioClient.Recv("loadData",function(d){
        var data = JSON.parse(d);
        const encrypted = data.text;
        ZTIMES.BUYER.load(encrypted);
        console.log("Received.");
    });
    console.log("Ready.");
  },
  payment: async function(){
    const publicKeyPgp = ZTIMES.BUYER.publicKeyArmored;
    const accounts = await ZTIMES.LIB.accessor.GetAccounts();
    const instance = await ZTIMES.LIB.accessor.GetContract(ZTIMES.LIB.contractABI,ZTIMES.LIB.contractAddress);
    await instance.methods.BuyDigital(publicKeyPgp).send({
      from: accounts[0],
      value: 1000,
      gas: 4712388,
      gasPrice: 100000000000
    });
  },
  load: async function(encrypted){
    const privateKeyArmored = this.key.privateKeyArmored;
    const privateKey = await ZTIMES.LIB.pgp.GetPrivateKey(
      {privateKeyArmored:privateKeyArmored,passphrase:this.params.passphrase}
    );
    const decrypted = await ZTIMES.LIB.pgp.Decrypt(
      {encrypted:encrypted,privateKey:privateKey}
    );
    this.textArea.value = decrypted;
  },
};
ZTIMES.RUN = {
  init: function(){
    ZTIMES.LIB.init();
    ZTIMES.BUYER.init();
  },
};
ZTIMES.RUN.init();

//

