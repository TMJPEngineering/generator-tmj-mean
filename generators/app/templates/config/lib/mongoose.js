'use strict';

var mongoose = require('mongoose');

module.exports = function (app) {
    /* Database */
    var db = mongoose.connection;
    db.on('error', console.error);
    db.once('open', function () {
        console.log('connected to db');
    });
    mongoose.Promise = global.Promise;
    mongoose.connect('mongodb://localhost/' + process.env.MONGO_DATABASE);
};
