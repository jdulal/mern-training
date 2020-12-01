const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.status(200).send('Hello World!');
});

const port = process.env.PORT || 3000;

const server = app.listen(port, function() {
  console.log('Express server listening on port ' + port);
});