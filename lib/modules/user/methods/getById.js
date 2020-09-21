'use strict';

(() => {
    const ObjectId = require('mongodb').ObjectId; 
    const httpStatus = require('http-status');
    module.exports = async(req, res, next) => {
        try {
            const {id} = req.params;
            const getById = await req.db.collection('user').findOne({_id: ObjectId(id)});
            console.log(getById, "====================");
            return res
            .status(httpStatus.OK)
            .set('Content-Type', 'application/json')
            .send({ status: httpStatus.OK, data: getById });
        } catch(err) {
            console.log(err);
            return next();
        }
    }
})();