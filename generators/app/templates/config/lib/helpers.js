'use strict';

String.prototype.toController = function () {
    return this.replace(/([a-z](?=[A-Z]))Controller/g, '$1.controller').toLowerCase();
};
