const projectId = require('./demo-helper')();

if (projectId) {

  require('@snyk/nodejs-runtime-agent')({
    projectId,
    beaconIntervalMs: 10000,
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

,------------------------------------------------------------,
|                                                            |
|      The demo application has started successfully.        |
|                                                            |
|   You can visit the application, and trigger an exploit,   |
|                 by visiting this url:                      |
|                                                            |
|            http://localhost:${PORT}/hello.txt                 |
|                                                            |
|        You can stop the application with ctrl+c.           |
|                                                            |
\`------------------------------------------------------------'

`));

module.exports = server;
