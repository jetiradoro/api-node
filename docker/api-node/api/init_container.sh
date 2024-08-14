#!/bin/bash

#windows compatibility
cat /scripts/.bashrc >> /root/.bashrc
dos2unix /root/.bashrc


cd /server

if [ ! -d "/server/node_modules" ]; then 
        echo "installing node libraries...";
        npm install;
fi

# npm run build
npm run start
