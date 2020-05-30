'use strict';

const moment = require('moment');
module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
     return queryInterface.bulkInsert('users', [{
      user_id: 'cfc68bb7-77d5-4445-8fcc-33a669e51652',
      email: 'admin@email.com',
      password: 'admin',
      created_at: moment().valueOf(),
      updated_at: moment().valueOf()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('People', users, {});

  }
};
