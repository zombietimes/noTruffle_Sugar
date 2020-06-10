# [noTruffle_Sugar](https://github.com/zombietimes/noTruffle_Sugar)
A blockchain application development environment without Truffle.  
  
## Overview
[noTruffle_Sugar](https://github.com/zombietimes/noTruffle_Sugar) is a development environment without Truffle.  
It consists of node.js and solc and Express and Ganache.  
Easy setup improves productivity.  
  
### Environment
This script file is for Ubuntu(Linux).  
I recommend that you use VirtualBox + Ubuntu.  
  
## Usage
### 1) Setup NVM
See [setup0041_nvm](https://github.com/zombietimes/setup0041_nvm)  
  
### 2) Setup Ganache
See [setup0070_ganache](https://github.com/zombietimes/setup0070_ganache)  
  
### 3) Setup Sugar
You can setup the development environment and new project.  
Run the command on Ubuntu console window.  
```sh
# Ubuntu commands.
cd dapps/deploy/by_sugar
sh ./setup.sh
node ./generate.js Ppd
# Ppd : Projectname
```
  
### 4) Compile and deploy
After running Ganache, run the command on Ubuntu console window.  
```sh
# Ubuntu commands.
cd /home/zombie/dapps/deploy/by_sugar/ppd/contracts
node ./complie.js
node ./migrate.js
```
  
### 5) App server
Run the command on Ubuntu console window.  
```sh
# Ubuntu commands.
cd /home/zombie/dapps/deploy/by_sugar/ppd
node ./bin/www
```
  
And then, go to http://127.0.0.1:3000.
![noTruffle_Sugar_0000](https://user-images.githubusercontent.com/50263232/84269161-ca28b980-ab63-11ea-9142-dbed0e053c0d.png)  
  
### Help
```sh
cd dapps/deploy/by_sugar
sh ./template/help.sh


== Setup ==
cd /home/zombie/dapps/deploy/by_sugar
sh ./setup.sh


== New project ==
cd /home/zombie/dapps/deploy/by_sugar
sh ./generate.sh Projectname


== Contract ==
cd /home/zombie/dapps/deploy/by_sugar/ppd/contracts
node ./complie.js
node ./migrate.js
local.html

vi /home/zombie/dapps/deploy/by_sugar/ppd/contracts/Ppd.sol
vi /home/zombie/dapps/deploy/by_sugar/ppd/contracts/local.html
vi /home/zombie/dapps/deploy/by_sugar/ppd/contracts/local.js


== Express ==
cd /home/zombie/dapps/deploy/by_sugar/ppd
node ./bin/www
http://127.0.0.1:3000

vi /home/zombie/dapps/deploy/by_sugar/ppd/app.js
vi /home/zombie/dapps/deploy/by_sugar/ppd/routes/users.js
vi /home/zombie/dapps/deploy/by_sugar/ppd/public/javascripts/client.js
vi /home/zombie/dapps/deploy/by_sugar/ppd/view/index.jade
```
  
## Relative link
### Overview
- [Ethereum : Official](https://www.ethereum.org/)
- [Ethereum : Wikipedia](https://en.wikipedia.org/wiki/Ethereum)
- [Loom Network : Official](https://loomx.io/)
- [Loom Network : Binance wiki](https://info.binance.com/en/currencies/loom-network)

### Development
- [Online editor : EthFiddle](https://ethfiddle.com/)
- [Online editor : Remix](https://remix.ethereum.org/)

### Learning
- [Online learning : CryptoZombies](https://cryptozombies.io/)
- [Grammar : Solidity](https://solidity.readthedocs.io/)
- [Grammar : Best Practices](https://github.com/ConsenSys/smart-contract-best-practices)

### DApps
- [DApps : CryptoKitties](https://www.cryptokitties.co/)
- [DApps : Zombie Battle ground](https://loom.games/en/)

## Messages
Do you believe that the decentralized world is coming?  
When do you use [DApps](https://en.wikipedia.org/wiki/Decentralized_application)?  
Why?  

## License
BSD 3-Clause, see `LICENSE` file for details.  

