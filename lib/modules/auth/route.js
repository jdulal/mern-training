'use strict';

(() => {
    const express = require('express');
    const authRouter = express.Router();
  
    const authController = require('.');
    authRouter.get('/get', authController.login);


    module.exports = authRouter;
})();