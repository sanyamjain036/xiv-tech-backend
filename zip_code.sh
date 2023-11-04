#!/bin/bash 

zip -r xiv-tech-backend-v3.zip . -x "node_modules/*" -x "dist/*" -x ".env" -x ".DS_Store" -x "zip_code.sh" -x "nodemon.json" -x ".gitignore"
