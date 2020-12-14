#!/bin/bash

npm run build
php -S localhost:8101 -t /var/app/animate.js/dist/

# npm run dev
# npm run build
# npm run watch
# npm run test
