# This script is for Ubuntu Ver18.04.
#!/bin/bash

cd $(dirname $0)
PATH_SUGAR=$PWD
echo $PATH_SUGAR

echo "\n<Setup>"
echo "Set up the project name."
echo "\n"
if [ $# -ne 1 ]; then
  echo 'No project name.'
  echo 'ex) node ./generate.js Projectname'
  echo 'Try it.'
  exit 1
fi
PROJECT_NAME=$1
PROJECT_NAME_LOWER=$(echo $PROJECT_NAME | tr '[:upper:]' '[:lower:]')
PROJECT_NAME_CAMEL=$(echo $PROJECT_NAME_LOWER | sed 's/^\(\w\)/\U\1/')
echo $PROJECT_NAME

echo "\n<Setup>"
echo "Set up express."
echo "\n"
cd $PATH_SUGAR
express $PROJECT_NAME_LOWER
cd $PROJECT_NAME_LOWER
npm install

echo "\n<Setup>"
echo "Set up the template files."
echo "\n"
PATH_SUGAR_PROJECT=$PATH_SUGAR/$PROJECT_NAME_LOWER
PATH_SUGAR_EXPRESS_JAVASCRIPTS=$PATH_SUGAR_PROJECT/public/javascripts
PATH_CONFIG_FILE=$PATH_SUGAR_PROJECT/contracts/CONFIG.js
PATH_LOCAL_HTML=$PATH_SUGAR_PROJECT/contracts/local.html
cd $PATH_SUGAR
cp -rf $PATH_SUGAR/template/* $PATH_SUGAR/$PROJECT_NAME_LOWER
sed -i -e "s#@contractNameLower#$PROJECT_NAME_LOWER#g" $PATH_CONFIG_FILE
sed -i -e "s#@contractNameCamel#$PROJECT_NAME_CAMEL#g" $PATH_CONFIG_FILE
sed -i -e "s#@pathProject#$PATH_SUGAR_PROJECT#g" $PATH_CONFIG_FILE
sed -i -e "s#@pathExpressJavascripts#$PATH_SUGAR_EXPRESS_JAVASCRIPTS#g" $PATH_CONFIG_FILE
sed -i -e "s#@pathExpressJavascripts#$PATH_SUGAR_EXPRESS_JAVASCRIPTS#g" $PATH_LOCAL_HTML

PATH_SUGAR_EXPRESS_ROUTES=$PATH_SUGAR_PROJECT/routes
cp -rf $PATH_CONFIG_FILE $PATH_SUGAR_EXPRESS_ROUTES/CONFIG.js

PATH_SUGAR_HELP=$PATH_SUGAR_PROJECT/help.sh
sed -i -e "s#@pathProject#$PATH_SUGAR_PROJECT#g" $PATH_SUGAR_HELP
sed -i -e "s#@contractNameCamel#$PROJECT_NAME_CAMEL#g" $PATH_SUGAR_HELP






