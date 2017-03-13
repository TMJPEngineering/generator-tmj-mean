'use strict';

/**
 * @author TMJP Engineering Team
 * @copyright 2017
 */

var path = require('path'),
    root = path.dirname(require.main.filename),
    view = require(root + '/vendor/view');

module.exports = function (method) {
    var methods = {
        index: index
    };

    return methods[method]();

    function index() {
        return function (req, res, next) {
            if (req.route.methods.get) {
                view('index', res);
            }
        }
    }
};
