// Contract
const contractABI = contractABIJs.body;
const contractAddress = contractAddressJs.body;
const accessor = new ACCESSOR({
  blockchain:'#Ganashe',
  protocol:'#Http',
  platform:'#Browser',
});

(async ()=>{
  const accounts = await accessor.GetAccounts();
  const instance = await accessor.GetContract(contractABI,contractAddress);

  const result = await instance.methods.Get().call({
    from: accounts[0],
  });
  console.log(result);

  await instance.methods.Set("We are zombies.").send({
    from: accounts[0],
    gas: 4712388,
    gasPrice: 100000000000
  });
})();

// Browser
document.getElementById('iBtn1').addEventListener('mousedown',function(ev){
  console.log(ev);
  document.getElementById('iText').value = 'btn1';
},false);
document.getElementById('iBtn2').addEventListener('mousedown',function(ev){
  console.log(ev);
  document.getElementById('iText').value = 'btn2';
},false);
document.getElementById('iBtn3').addEventListener('mousedown',function(ev){
  console.log(ev);
  document.getElementById('iText').value = 'btn3';
},false);



//

