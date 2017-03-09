/**
 * Bootstrapper in Angular
 * @author TMJP Engineering Team 2016
 */

(function () {
    'use strict';

    angular
        .module('core')
        .config(bootstrapConfig);

    bootstrapConfig.$inject = ['$httpProvider'];

    function bootstrapConfig($httpProvider) {
        $httpProvider.interceptors.push('errorInterceptor');
    }
})();
