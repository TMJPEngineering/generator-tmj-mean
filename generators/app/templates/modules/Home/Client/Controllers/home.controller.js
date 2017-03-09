(function () {
    'use strict';

    angular.module('home')
        .controller('HomeController', HomeController);

    HomeController.$inject = [];

    /* @ngInject */
    function HomeController() {
        var vm = this;
        activate();

        function activate() {}
    }
})();
