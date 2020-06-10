// SPDX-License-Identifier: MIT
pragma solidity >= 0.5.0;

contract Ppd {
  address private s_xDeployer;
  uint s_amount;
  uint s_price = 1000;  //wei

  constructor() public {
    s_xDeployer = msg.sender;
  }
  function destructor() public {
    require(msg.sender != address(0));
    require(msg.sender == s_xDeployer);
    selfdestruct(msg.sender);
  }
  function GetDeployer() public view returns(address xDeployer){
    return s_xDeployer;
  }
  function Withdraw() public payable {
    require(msg.sender != address(0));
    require(msg.sender == s_xDeployer);
    uint amount = s_amount;
    s_amount = 0;
    msg.sender.transfer(amount);
  }
  event Payment(address xBuyer,string publicKeyPgp);
  function BuyDigital(string memory publicKeyPgp) public payable {
    require(msg.sender != address(0));
    require(msg.value == s_price);
    s_amount += s_price;
    emit Payment(msg.sender,publicKeyPgp);
  }

  string s_text = "I am a zombie.";
  function Set(string memory text) public {
    s_text = text;
  }
  function Get() public view returns(string memory text) {
    text = s_text;
  }
}

