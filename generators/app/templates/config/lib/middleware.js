'use strict';

var csrf = require('csurf'),
    cookieParser = require('cookie-parser'),
    csrfProtection = csrf({ cookie: true }),
    helmet = require('helmet'),
    methodOverride = require('method-override'),
    session = require('express-session'),
    passport = require('passport');

module.exports = function (app) {
    app.use(cookieParser(Math.random().toString(36).substring(7)));
    app.use(csrfProtection);
    app.use(helmet());
    app.use(methodOverride('X-HTTP-Method-Override'));
    app.use(session({
        secret: process.env.SESSION_SECRET || 'secret',
        resave: false,
        saveUninitialized: true
    }));
    app.use(passport.initialize());
    app.use(passport.session());
};
