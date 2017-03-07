'use strict';

var ctrl = require('./controller'),
    middleware = require('./middleware'),
    router;

module.exports = {
    config: {
        app: null,
        set: function (controller) {
            router = {
                str: controller.split('@'),
                controller: controller.split('@').shift(),
                module: controller.split('@').shift().split('.')
            };
        },
        callback: function (res, req, next) {
            next();
        }
    },
    setApp: function (app) {
        this.config.app = app;
    },
    get: function (uri, controller, auth) {
        this.config.set(controller);
        this.config.app.get(uri, (auth) ? middleware(auth) : this.config.callback, ctrl(router.controller, router.str.pop(), router.module.shift()));
        return this;
    },
    post: function (uri, controller, auth) {
        this.config.set(controller);
        this.config.app.post(uri, (auth) ? middleware(auth) : this.config.callback, ctrl(router.controller, router.str.pop(), router.module.shift()));
    },
    update: function (uri, controller, auth) {
        this.config.set(controller);
        this.config.app.put(uri, (auth) ? middleware(auth) : this.config.callback, ctrl(router.controller, router.str.pop(), router.module.shift()));
    },
    delete: function (uri, controller, auth) {
        this.config.set(controller);
        this.config.app.delete(uri, (auth) ? middleware(auth) : this.config.callback, ctrl(router.controller, router.str.pop(), router.module.shift()));
    },
    all: function (uri, callback) {
        this.config.app.all(uri, function (req, res) {
            callback(req, res);
        });
    }
};
