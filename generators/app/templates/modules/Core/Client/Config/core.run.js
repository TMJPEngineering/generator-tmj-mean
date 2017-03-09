/**
 * Core Run in Angular
 * @author TMJP Engineering Team 2016
 */

(function () {
    'use strict';

    angular.module('core')
        .run(coreRun);
    coreRun.$inject = ['ResponseErrorEvent'];

    function coreRun(ResponseErrorEvent) {
        // Listener for response error event
        ResponseErrorEvent.listen(function(event, errorMessage) {
            // Handle errors
            alert(errorMessage);
        });
    }
})();
