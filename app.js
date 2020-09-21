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

const mongoDbConnector = require('./lib/policies/mongo-database.policy');

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

//initializing mongodb
mongoDbConnector.init(app);

app.use(morgan('combined'));

// Middleware for checking the logged in status
app.use((req, res, next) => {
    if (app.locals.db) {
      req.db = app.locals.db;
    }
    if (app.locals.clientDb) {
      req.clientDb = app.locals.clientDb;
    }
    req.root_dir = __dirname;
    //req.client_ip_address = requestIp.getClientIp(req);
    //req.client_device = req.device.type + ' ' + req.device.name;
    next();
});

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