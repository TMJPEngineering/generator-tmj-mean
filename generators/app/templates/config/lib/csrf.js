'use strict';

module.exports = function (app) {
    /* We use csurf for csrfProtection */
    app.use(function (req, res, next) {
        res.cookie('XSRF-TOKEN', req.csrfToken());
        next();
    });
};
