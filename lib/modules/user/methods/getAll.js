'use strict';

(() => {
    const httpStatus = require('http-status');
    module.exports = async(req, res, next) => {
        try {
            const getAllUser = await req.db.collection('user').find().toArray();
            console.log(getAllUser, "====================");

            return res
            .status(httpStatus.OK)
            .set('Content-Type', 'application/json')
            .send({ status: httpStatus.OK, data: getAllUser });
        } catch(err) {
            console.log(err);
            return next();
        }
    }
})();