var ctrl = require('./controller'),
    middleware = require('./middleware'),
    resources = require('./resources'),
    router,
    opts;

module.exports = {
    config: {
        app: null,
        set: function (controller, uri, module, middlewares) {
            var str = controller.split('@');
            router = {
                str: str,
                module: module,
                middlewares: (opts !== undefined && opts.middleware !== undefined) ? opts.middleware : middlewares,
                uri: (opts !== undefined && opts.prefix !== undefined) ? '/' + opts.prefix + uri : uri,
                controller: str.shift().toController()
            };
        },
        callback: function (res, req, next) {
            next();
        }
    },
    setApp: function (app) {
        this.config.app = app;
    },
    setModule: function (module) {
        this.module = module;
    },
    get: function (uri, controller, middlewares) {
        this.config.set(controller, uri, this.module, middlewares);
        this.config.app.get(router.uri.trimUri(), (router.middlewares) ? middleware(router.middlewares) : this.config.callback, ctrl(router.controller, router.str.pop(), router.module));
        return this;
    },
    post: function (uri, controller, middlewares) {
        this.config.set(controller, uri, this.module, middlewares);
        this.config.app.post(router.uri.trimUri(), (router.middlewares) ? middleware(router.middlewares) : this.config.callback, ctrl(router.controller, router.str.pop(), router.module));
    },
    update: function (uri, controller, middlewares) {
        this.config.set(controller, uri, this.module, middlewares);
        this.config.app.put(router.uri.trimUri(), (router.middlewares) ? middleware(router.middlewares) : this.config.callback, ctrl(router.controller, router.str.pop(), router.module));
    },
    delete: function (uri, controller, middlewares) {
        this.config.set(controller, uri, this.module, middlewares);
        this.config.app.delete(router.uri.trimUri(), (router.middlewares) ? middleware(router.middlewares) : this.config.callback, ctrl(router.controller, router.str.pop(), router.module));
    },
    resource: function (uri, controller, middlewares, options) {
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
            if (resource != 'store' && resource != 'update' && resource != 'destroy') {
                var str = '';
                if (resource == 'create') {
                    str = '/create';
                }
                if (resource == 'show') {
                    str = '/:id';
                }
                if (resource == 'edit') {
                    str = '/:id/edit';
                }
                $this.get('/' + uri + str, router.controller + '@' + resource, middlewares);
            }
            if (resource == 'store') {
                $this.post('/' + uri, router.controller + '@' + resource, middlewares);
            }
            if (resource == 'update') {
                $this.update('/' + uri + '/:id', router.controller + '@' + resource, middlewares);
            }
            if (resource == 'destroy') {
                $this.delete('/' + uri + '/:id', router.controller + '@' + resource, middlewares);
            }
        });
    },
    group: function (options, callback) {
        opts = options;
    },
    endGroup: function () {
        opts = undefined;
    },
    all: function (uri, callback) {
        this.config.app.all(uri, function (req, res) {
            callback(req, res);
        });
    }
};
