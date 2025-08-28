#!/bin/bash
cd /var/www/nodejs-app
curl -fsSL https://deb.nodesource.com/setup_22.x | bash -
apt-get install -y nodejs
npm install --production
