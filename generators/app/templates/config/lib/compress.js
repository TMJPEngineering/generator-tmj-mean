'use strict';

var compression = require('compression');

module.exports = function (app) {
    /* GZIP Compression */
    app.use(compression({ filter: shouldCompress }));
};

function shouldCompress(req, res) {
    if (req.headers['x-no-compression']) {
        return false;
    }

    return compression.filter(req, res);
}
