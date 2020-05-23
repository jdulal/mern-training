'use strict';
const http = require('http');
const app = require('./app');
const port = process.env.PORT || 3000;
const hostname = process.env.HOST || '127.0.0.1';
const server = http.createServer(app);

app.set('PORT_NUMBER', port);


server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });

process.on('SIGTERM', () => {
  server.close(() => {
    process.exit(0);
  });
});

module.exports = server;
