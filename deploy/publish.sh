#! /bin/sh

msg=${*:-"c"}

npm run deploy;
git add --all;
git commit -m "$msg";
npm version patch;
git push origin master:master;
npm publish;
npm publish --registry='https://registry.npmjs.org';
cnpm sync react-mgm;
npm version;
