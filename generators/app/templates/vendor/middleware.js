'use strict';

module.exports = function (middlewares) {
    var groups = [];

    middlewares.forEach(function (middleware) {
        var str = middleware.split('.');
        groups.push(require("./../modules/" + str[0] + "/server/" + str[0] + "." + str[1])(str[2]));
    });

    return groups;
};
