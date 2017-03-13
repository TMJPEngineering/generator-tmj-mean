/**
 * @author TMJP Web Development Team
 * @copyright 2016
 */

(function () {
    'use strict';

    angular.module('welcome')
        .config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

    function config($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('welcome', {
                url: '/',
                views: {
                    'content': {
                        templateUrl: 'views/welcome/index.html',
                        controller: 'WelcomeController',
                        controllerAs: 'wc',
                    }
                }
            });
        $locationProvider.html5Mode(true);
    }
})();
