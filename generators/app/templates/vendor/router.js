'use strict';

var ctrl = require('./controller'),
    middleware = require('./middleware');

module.exports = {
    config: {
        app: null,
        callback: function (res, req, next) {
            next();
        }
    },
    setApp: function (app) {
        this.config.app = app;
    },
    get: function (uri, controller, auth) {
        var str = controller.split('@');
        var module = str[0].split('.');
        this.config.app.get(uri, (auth) ? middleware(auth) : this.config.callback, ctrl(str[0], str[1], module[0]));
        return this;
    },
    post: function (uri, controller, auth) {
        var str = controller.split('@');
        var module = str[0].split('.');
        this.config.app.post(uri, (auth) ? middleware(auth) : this.config.callback, ctrl(str[0], str[1], module[0]));
    },
    all: function (uri, callback) {
        this.config.app.all(uri, function (req, res) {
            callback(req, res);
        });
    }
};
