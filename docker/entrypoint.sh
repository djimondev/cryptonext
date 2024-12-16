#!/bin/sh

# Replace environment variables in configuration file
sed -i "s|%%API_URL%%|${API_URL}|g" /usr/share/nginx/html/config.js
sed -i "s|%%ENVIRONMENT%%|${ENVIRONMENT}|g" /usr/share/nginx/html/config.js

# Start Nginx
exec nginx -g 'daemon off;' 