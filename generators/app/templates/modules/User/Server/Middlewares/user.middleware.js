'use strict';

module.exports = function (method) {
    var methods = {};

    return methods[method]();
};
