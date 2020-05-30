'use strict';

(() => {
  const express = require('express');
  const router = express.Router();

  // const v1Route = require('./v1');
  // router.use('/v1', v1Route);

  const authroute = require('../modules/auth');
  router.use('/auth', authroute);

  module.exports = router;
})();