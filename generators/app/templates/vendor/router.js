'use strict';

var ctrl = require('./controller'),
    middleware = require('./middleware'),
    resources = require('./resources'),
    router;

module.exports = {
    config: {
        app: null,
        set: function (controller) {
            router = {
                str: controller.split('@'),
                controller: controller.split('@').shift().toController(),
                module: controller.split('@').shift().toModule()
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
        this.config.app.get(uri, (auth) ? middleware(auth) : this.config.callback, ctrl(router.controller, router.str.pop(), router.module));
        return this;
    },
    post: function (uri, controller, auth) {
        this.config.set(controller);
        this.config.app.post(uri, (auth) ? middleware(auth) : this.config.callback, ctrl(router.controller, router.str.pop(), router.module));
    },
    update: function (uri, controller, auth) {
        this.config.set(controller);
        this.config.app.put(uri, (auth) ? middleware(auth) : this.config.callback, ctrl(router.controller, router.str.pop(), router.module));
    },
    delete: function (uri, controller, auth) {
        this.config.set(controller);
        this.config.app.delete(uri, (auth) ? middleware(auth) : this.config.callback, ctrl(router.controller, router.str.pop(), router.module));
    },
    resource: function (uri, controller, auth, options) {
        this.config.set(controller);
        var $this = this;
        resources = resources.filter(function(value) {
            if (options !== undefined && options.only !== undefined)
                return options.only.indexOf(value) !== -1;
            if (options !== undefined && options.except !== undefined)
                return options.except.indexOf(value) !== 0;
            return true;
        });
        resources.forEach(function (resource) {
            if (resource != 'store' && resource != 'update' && resource != 'delete') {
                var str;
                if (resource == 'create') {
                    str = '/create';
                }
                if (resource == 'show') {
                    str = '/:id';
                }
                if (resource == 'edit') {
                    str = '/:id/edit';
                }
                $this.get(uri + str, router.controller + '@' + resource, auth);
            }
            if (resource == 'store') {
                $this.post(uri, router.controller + '@' + resource, auth);
            }
            if (resource == 'update') {
                $this.put(uri + '/:id', router.controller + '@' + resource, auth);
            }
            if (resource == 'delete') {
                $this.delete(uri + '/:id', router.controller + '@' + resource, auth);
            }
        });
    },
    all: function (uri, callback) {
        this.config.app.all(uri, function (req, res) {
            callback(req, res);
        });
    }
};
