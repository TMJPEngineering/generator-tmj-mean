'use strict';

var Mongoose = require('mongoose'),
    Schema = Mongoose.Schema,
    plugin = require('./../../shared/server/shared.schema'),

    userSchema = new Mongoose.Schema({
        name: {
            type: String,
            require: true
        },
        username: {
            type: String,
            require: true
        },
        password: {
            type: String,
            require: true,
            select: false
        }
    });

userSchema.plugin(plugin);

module.exports = Mongoose.model('User', userSchema);
