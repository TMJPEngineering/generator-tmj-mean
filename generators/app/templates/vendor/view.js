'use strict';

var path = require('path'),
    root = path.dirname(require.main.filename);

module.exports = function (file, res) {
    var file = file.replace(/\./g, '/');
    res.sendFile(root + '/resources/views/' + file +  '.html');
};