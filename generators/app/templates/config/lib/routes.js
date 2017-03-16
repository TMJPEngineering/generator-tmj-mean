'use strict';

var fs = require('fs'),
    path = require('path'),
    root = path.dirname(require.main.filename),
    route = require(root + '/vendor/router');

module.exports = function (app) {
    /* Load All Routes */
    route.setApp(app);

    function recursiveRoutes(dir) {
        fs.readdirSync(dir).forEach(function (file) {
            var pathName = path.join(dir, file);
            var stat = fs.lstatSync(pathName);

            if (stat.isDirectory()) {
                recursiveRoutes(dir + '/' + file);
            } else if (file.indexOf('.routes') >= 0) {
                var name = pathName.replace('.js', '').replace(/\\/g, '/');
                require(name)(app);
            }
        });
    }

    recursiveRoutes(root + '/modules');

    app.get('/logout', function (req, res) {
        req.logout();
        res.redirect('/login');
    });

    app.all('/*', function (req, res) {
        res.redirect('/');
    });
};
