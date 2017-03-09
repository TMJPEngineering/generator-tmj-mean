'use strict';

var path = require('path'),
    root = path.dirname(require.main.filename),
    route = require(root + '/vendor/router');

module.exports = function (app) {
    route.get('/', 'AuthController@index', ['Auth::protect'], 'Auth');

    route.get('/login', 'AuthController@login', [], 'Auth');
    route.get('/register', 'AuthController@register', [], 'Auth');

    route.post('/login', 'AuthController@login', [], 'Auth');
    route.post('/register', 'AuthController@register', [], 'Auth');
};
