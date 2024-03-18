const http = require('http');
const fs=require('fs');
const { resolve } = require('path');
const route=require('./route')
const server = http.createServer(route);
server.listen(3000);
















