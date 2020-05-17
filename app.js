const express = require('express')
const app = express();
const path = require('path');


require('dotenv').config({path: path.join(__dirname, "conf/.env")});


app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
});