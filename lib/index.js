const projectId = require('./demo-helper')();

if (projectId) {

  require('@snyk/nodejs-runtime-agent')({
    projectId,
  });

  console.log('Agent loaded successfully, your application is monitored.');
} else {
  console.log('Agent *not* loaded.');
}

// create a server with a known vulnerability
const http = require('http');
const st = require('st');
const PORT = process.env.PORT || 3000;

const server = http.createServer(
  st({
    path: __dirname + '/static',
    url: '/',
    cors: true,
  })
);

server.listen(PORT, () => console.log(`

Demo server started, hit http://localhost:${PORT}/hello.txt to try it.

`));

module.exports = server;
