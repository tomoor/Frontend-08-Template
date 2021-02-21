const http = require('http');


http.createServer((reuqest, response) => {
  let body = [];
  reuqest.on('error', err => {
    console.log(err);
  }).on('data', chunk => {
    console.log(chunk.toString())
    body.push(chunk);
  }).on('end', () => {
    body = Buffer.concat(body).toString();
    console.log("body:", body)
    response.writeHeader(200, { 'Context-Type': 'text/html' });
    response.end(' Hello World\n');
  })
}).listen(8080);

console.log("server started", 8080);