(function () {
    'use strict';

    angular.module('navigation')
        .directive('href', href);

    href.$inject = [];

    function href() {
        return {
            restrict: 'A',
            link: linkFunction
        }

        function linkFunction(scope, element, attr) {
            element.on('click', function (e) {
                e.preventDefault();
                window.location.href = attr.href;
            });
        }
    }
})();