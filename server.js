const http = require('http');
const server = http.createServer((req, res) => {
    console.log("Udtraj Rout")
  res.setHeader('Content-Type', 'text/plain');
  res.end('Uditraj Rout');
});
server.listen(3000);
