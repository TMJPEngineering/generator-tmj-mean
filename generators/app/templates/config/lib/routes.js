'use strict';

var fs = require('fs'),
    path = require('path'),
    route = require('../../vendor/router'),
    middleware = require('./../../modules/core/server/core.middleware');

module.exports = function (app) {
    /* Load All Routes */
    route.setApp(app);

    function recursiveRoutes(folderName) {
        var normalizedPath = path.join(__dirname, folderName);

        fs.readdirSync(normalizedPath).forEach(function (file) {
            var pathName = path.join(normalizedPath, file);
            var stat = fs.lstatSync(pathName);

            if (stat.isDirectory()) {
                recursiveRoutes(folderName + '/' + file);
            } else if (file.indexOf('.routes') >= 0) {
                var name = pathName.replace('.js', '').replace(/\\/g, '/');
                require(name)(app);
            }
        });
    }

    recursiveRoutes('./../../modules');

    app.get('/logout', function (req, res) {
        req.logout();
        res.redirect('/login');
    });
};
