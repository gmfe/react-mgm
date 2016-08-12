#! /bin/sh

echo $1;
echo $2;

npm run deploy;
git add --all;
git commit -m $1;
npm version patch;
git push origin master:master;
npm publish;
npm publish --registry='https://registry.npmjs.org';
cnpm sync react-mgm;
npm version;