#!/bin/bash

cd ../peermaster.github.io
find . -not -path '*/\.*' -delete

cd ..

cp -R $(pwd)/peerlancers/ $(pwd)/peermaster.github.io

cd peermaster.github.io

git add *
git commit -a -m "auto commit and push"
git push origin main