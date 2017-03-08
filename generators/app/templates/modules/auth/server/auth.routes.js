'use strict';

var route = require('./../../../vendor/router');

module.exports = function (app) {
    route.get('/', 'AuthController@index', ['auth.middleware.protect']);

    route.get('/login', 'AuthController@login');
    route.get('/register', 'AuthController@register');

    route.post('/login', 'AuthController@login');
    route.post('/register', 'AuthController@register');
};
