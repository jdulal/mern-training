'use strict';

(() => {
    const express = require('express');
    const userRouter = express.Router();
  
    const userController = require('.');
    userRouter.post('/', userController.create);
    userRouter.get('/', userController.getAll);
    userRouter.get('/getInfo/:id', userController.getById);


    module.exports = userRouter;
})();