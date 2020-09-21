'use strict';

(() => {
    const httpStatus = require('http-status');
    module.exports = async(req, res, next) => {
        try {
            const { name, address } = req.body;
            const saveUser = await req.db.collection('user').insertOne({
                name, address 
            });
            console.log(saveUser, "====================")
            return res
            .status(httpStatus.OK)
            .set('Content-Type', 'application/json')
            .send({ status: httpStatus.OK, data: "Saved SuccessFully" });
        } catch(err) {
            console.log(err);
            return next();
        }
    }
})();