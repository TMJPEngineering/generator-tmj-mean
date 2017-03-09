'use strict';

module.exports = function (middlewares) {
    var groups = [];

    middlewares.forEach(function (middleware) {
        var str = middleware.split('::'),
            module = str.shift(),
            method = str.shift();

        groups.push(require("./../modules/" + module + "/Server/Middlewares/" + module.toLowerCase() + ".middleware")(method));
    });

    return groups;
};
