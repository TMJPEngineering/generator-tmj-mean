/**
 * Default Core Message Constants
 * Can be overriden if neccessary by deferedBoostrapper
 * @author TMJP Engineering Team 2016
 */

(function () {
    'use strict';

    angular
        .module('core')
        .constant('CORE_MSG', coreMsg());

    function coreMsg() {
        return  {
            'ERR_PERMISSION' : 'Sorry, you have no permission.',
            'ERR_UNKNOWN' : 'Unknown error occured.',
        };
    }
})();
