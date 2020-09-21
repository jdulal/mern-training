'use strict';

(() => {
  const express = require('express');
  const router = express.Router();

  const authroute = require('../modules/auth/route');
  router.use('/auth', authroute);

  const userroute = require('../modules/user/route');
  router.use('/user', userroute);

  module.exports = router;
})();