const express = require('express')
const app = express();
const path = require('path');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const indexRouter = require('./lib/routes');

//accessing .env file for applications
require('dotenv').config({path: path.join(__dirname, "conf/.env")});

//enabling cors
app.use(cors());
app.options('*', cors());

//securing express app
app.use(helmet({
  dnsPrefetchControl: false,
  frameguard: false,
  ieNoOpen: false,
}));

// parsing the request bodys
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

app.use(morgan('combined'));

app.use('/api', indexRouter);

app.get('/', (req, res) => {
  res.send('Hello World!')
});

//route not found error handler
app.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});

//global error handler thrown in next
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error:{
      message: error.message
    }
  })
});

module.exports = app;