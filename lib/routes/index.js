'use strict';

(() => {
  const express = require('express');
  const router = express.Router();

  const authroute = require('../modules/auth/route');
  router.use('/auth', authroute);

  module.exports = router;
})();