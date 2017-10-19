#! /bin/sh

rm -rf build
rm -rf docs;
mkdir docs;
NODE_ENV=production webpack -p;
cp -r build docs;
git add --all;
git commit -m 'docs generate';
git push origin master:master;
