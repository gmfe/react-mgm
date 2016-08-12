#! /bin/sh

echo $1;

git add --all;
git commit -m $1;
npm version patch;

npm run clear;
npm run deploy;
exit;

git push origin master:master;
npm publish;
npm publish --registry='https://registry.npmjs.org';
cnpm sync react-mgm;
npm version;