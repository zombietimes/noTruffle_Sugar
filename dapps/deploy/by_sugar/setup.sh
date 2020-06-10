# This script is for Ubuntu Ver18.04.
#!/bin/bash

cd $(dirname $0)
PATH_SUGAR=$PWD
echo $PATH_SUGAR

echo "\n<Setup>"
echo "Set up npm packages."
echo "\n"
cd $PATH_SUGAR
npm init
npm install solc --save
npm install web3 --save
npm install openpgp --save
npm install socket.io --save

echo "\n<Setup>"
echo "Set up express."
echo "\n"
cd $PATH_SUGAR
sudo apt-get install node-express-generator -y
npm install express --save
npm install express-generator --save



