'use strict';

var passport = require('passport'),
    TMJStrategy = require('tmj-passport');

module.exports = function (app) {
    passport.use(new TMJStrategy({
        apiToken: process.env.BE_TALK_TOKEN,
        url: process.env.BE_TALK_API + '/login',
        usernameField: 'username',
        passwordField: 'password'
    }));

    passport.serializeUser(function (user, done) {
        done(null, user);
    });

    passport.deserializeUser(function (user, done) {
        done(null, user);
    });
};
