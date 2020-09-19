'use strict';

((databaseHelper) => {
  
  const Promise = require('bluebird');
  const mongodb = Promise.promisifyAll(require('mongodb'));
  const MongoClient = mongodb.MongoClient;

  databaseHelper.init = async (app) => {
    // New change for mongodb version 3.6.1
    console.log(`mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`, ">>>>>>>>>>>>>>>>>>>>>>>>>>")
    const client = await MongoClient.connect(
      `mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}?authSource=admin`,
      {
        promiseLibrary: Promise,
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
    );
    if (client) {
      app.locals.db = client.db(process.env.DB_NAME);
      console.log('database connection success');
      return client;
    }
  };
  databaseHelper.initClientDB = async (app) => {
    try {
      const clientDb = await MongoClient.connect(
        `mongodb://${process.env.DB_CLIENT_USERNAME}:${process.env.DB_CLIENT_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
        {
          promiseLibrary: Promise,
          useNewUrlParser: true
        }
      );
      if (clientDb) {
        app.locals.clientDb = clientDb.db(process.env.DB_NAME);
        console.log('client database connection success');
        return clientDb;
      }
    } catch (err) {
      console.log('Database can not be connected')
    }
  }
})(module.exports);
