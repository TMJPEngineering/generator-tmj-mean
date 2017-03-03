/**
 * Response Error Event Handler in Angular
 * @author TMJP Engineering Team 2016
 */

(function () {
    'use strict';

    angular
        .module('core')
        .factory('ResponseErrorEvent', ResponseErrorEvent);
    ResponseErrorEvent.$inject = ['$rootScope'];

    /* @ngInject */
    function ResponseErrorEvent($rootScope) {
        var eventName = 'response-error',
            service = {
                fire: fire,
                listen: listen
            };

        return service;

        function fire(data) {
            $rootScope.$emit(eventName, data);
        }

        function listen(callback) {
            var deregister = $rootScope.$on(eventName, listener);

            function listener() {
                if (callback) {
                    callback.apply($rootScope, arguments);
                }
            }

            return deregister;
        }
    }
})();
