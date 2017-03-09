'use strict';

var route = require('./../../../vendor/router');

module.exports = function (app) {
    route.get('/', 'AuthController@index', ['auth.middleware.protect'], 'auth');

    route.get('/login', 'AuthController@login', [], 'auth');
    route.get('/register', 'AuthController@register', [], 'auth');

    route.post('/login', 'AuthController@login', [], 'auth');
    route.post('/register', 'AuthController@register', [], 'auth');
};
