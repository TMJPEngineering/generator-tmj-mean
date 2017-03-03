'use strict';

var route = require('./../../../vendor/router');

module.exports = function (app) {
    route.get('/', 'auth.controller@index', ['auth.middleware.protect']);

    route.get('/login', 'auth.controller@login');
    route.get('/register', 'auth.controller@register');

    route.post('/login', 'auth.controller@login');
    route.post('/register', 'auth.controller@register');
};
