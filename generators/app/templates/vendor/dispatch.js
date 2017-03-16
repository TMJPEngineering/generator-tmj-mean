'use strict';

var path = require('path'),
    root = path.dirname(require.main.filename);

module.exports = function (file, callback) {
    var str = file.split('::'),
        module = str.shift(),
        job = str.shift();

    require(root + '/modules/' + module + '/Server/Jobs/' + job.toLowerCase() + '.job')(callback.shift(), callback.shift());
};