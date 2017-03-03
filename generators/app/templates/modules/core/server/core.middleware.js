'use strict';

module.exports = function (method) {
    var methods = {
        auth: require('./middleware/auth'),
        csrf: require('./middleware/csrf')
    };

    return methods[method]();
};
