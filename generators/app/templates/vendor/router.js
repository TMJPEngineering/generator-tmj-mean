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
        var str = controller.split('@'),
            controller = str.shift(),
            module = controller.split('.');
        this.config.app.get(uri, (auth) ? middleware(auth) : this.config.callback, ctrl(controller, str.shift(), module.shift()));
        return this;
    },
    post: function (uri, controller, auth) {
        var str = controller.split('@'),
            controller = str.shift(),
            module = controller.split('.');
        this.config.app.post(uri, (auth) ? middleware(auth) : this.config.callback, ctrl(controller, str.shift(), module.shift()));
    },
    update: function (uri, controller, auth) {
        var str = controller.split('@'),
            controller = str.shift(),
            module = controller.split('.');
        this.config.app.put(uri, (auth) ? middleware(auth) : this.config.callback, ctrl(controller, str.shift(), module.shift()));
    },
    delete: function (uri, controller, auth) {
        var str = controller.split('@'),
            controller = str.shift(),
            module = controller.split('.');
        this.config.app.delete(uri, (auth) ? middleware(auth) : this.config.callback, ctrl(controller, str.shift(), module.shift()));
    },
    all: function (uri, callback) {
        this.config.app.all(uri, function (req, res) {
            callback(req, res);
        });
    }
};
