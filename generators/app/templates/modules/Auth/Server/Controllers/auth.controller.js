'use strict';

var path = require('path'),
    root = path.dirname(require.main.filename),
    passport = require('passport');

module.exports = function (method) {
    var methods = {
        index: index,
        login: login,
        register: register
    };

    return methods[method]();

    function index() {
        return function (req, res, next) {
            if (req.route.methods.get) {
                res.sendFile(root + '/resources/views/index.html');
            }
        }
    }

    function login() {
        return function (req, res, next) {
            if ( ! req.route.methods.get) {
                passport.authenticate('tmj', function (err, user, info) {
                    var throwErr = err || info;

                    if (throwErr) {
                        return res.status(throwErr.code).send(throwErr.message);
                    }

                    req.logIn(user, function (err) {
                        if (err) {
                            return res.status(400).send(err);
                        }
                        return res.json(user);
                    });
                })(req, res);
            } else {
                res.sendFile(root + '/resources/views/auth/index.html');
            }
        }
    }

    function register() {
        return function (req, res, next) {
            if ( ! req.route.methods.get) {
                console.log('TODO: Register');
            } else {
                res.sendFile(root + '/resources/views/auth/index.html');
            }
        }
    }
};
