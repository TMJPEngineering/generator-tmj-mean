'use strict';

/**
 * @author TMJP Engineering Team
 * @copyright 2017
 */

var path = require('path'),
    root = path.dirname(require.main.filename),
    route = require(root + '/vendor/router');

module.exports = function (app) {
    route.setModule('Welcome');

    route.get('/', 'WelcomeController@index');
};
