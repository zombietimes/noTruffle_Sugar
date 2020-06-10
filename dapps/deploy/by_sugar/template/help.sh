# This script is for Ubuntu Ver18.04.
#!/bin/bash

echo "\n"

echo "== Setup =="
echo "cd /home/zombie/dapps/deploy/by_sugar"
echo "sh ./setup.sh"
echo "\n"

echo "== New project =="
echo "cd /home/zombie/dapps/deploy/by_sugar"
echo "sh ./generate.sh Projectname"
echo "sh ./generate.sh Ppd"
echo "\n"

echo "== Contract =="
echo "cd /home/zombie/dapps/deploy/by_sugar/ppd/contracts"
echo "node ./complie.js"
echo "node ./migrate.js"
echo "local.html"
echo ""
echo "vi /home/zombie/dapps/deploy/by_sugar/ppd/contracts/Ppd.sol"
echo "vi /home/zombie/dapps/deploy/by_sugar/ppd/contracts/local.html"
echo "vi /home/zombie/dapps/deploy/by_sugar/ppd/contracts/local.js"
echo "\n"

echo "== Express =="
echo "cd /home/zombie/dapps/deploy/by_sugar/ppd"
echo "node ./bin/www"
echo "http://127.0.0.1:3000"
echo ""
echo "vi /home/zombie/dapps/deploy/by_sugar/ppd/app.js"
echo "vi /home/zombie/dapps/deploy/by_sugar/ppd/routes/users.js"
echo "vi /home/zombie/dapps/deploy/by_sugar/ppd/public/javascripts/client.js"
echo "vi /home/zombie/dapps/deploy/by_sugar/ppd/view/index.jade"
echo "\n"

