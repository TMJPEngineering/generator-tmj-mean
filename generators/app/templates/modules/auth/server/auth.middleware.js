'use strict';

module.exports = function (method) {
    var methods = {
        protected: require('./middleware/protected')
    };

    return methods[method]();
};
