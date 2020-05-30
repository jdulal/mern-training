"use strict";
(()=>{
  module.exports = {
    "development": {
      "username": "newuser",
      "password": "Pass@123",
      "database": "newTest",
      "host": "127.0.0.1",
      "dialect": "mysql",
      "port": 3306
    },
    "test": {
      "username": "root",
      "password": null,
      "database": "database_test",
      "host": "127.0.0.1",
      "dialect": "mysql",
      "operatorsAliases": false
    },
    "production": {
      "username": "root",
      "password": null,
      "database": "database_production",
      "host": "127.0.0.1",
      "dialect": "mysql",
      "operatorsAliases": false
    }
  }
})();
