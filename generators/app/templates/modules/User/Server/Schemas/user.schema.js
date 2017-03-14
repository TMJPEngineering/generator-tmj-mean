'use strict';

var Mongoose = require('mongoose'),
    Schema = Mongoose.Schema,
    path = require('path'),
    crypto = require('crypto'),
    root = path.dirname(require.main.filename),
    plugin = require(root + '/modules/Shared/Server/Schemas/shared.schema'),

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
            set: function (password) {
                return crypto.createHash('sha1').update(password).digest('hex')
            }
        }
    });

userSchema.plugin(plugin);

userSchema.methods.verifyPassword = function (password) {
    return this.password === crypto.createHash('sha1').update(password).digest('hex')
};

module.exports = Mongoose.model('User', userSchema);
