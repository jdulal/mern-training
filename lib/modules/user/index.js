'use strict';

(() => {
    module.exports = {
        create: require('./methods/create'),
        getAll: require('./methods/getAll'),
        getById: require('./methods/getById')
    }
})();