/**
 * @namespace App
 * @desc      Root of the application
 */
(function () {
    'use strict';

    angular
        .module('templates', []);

    angular
        .module('angularjs-starter', [
            'ui.router',
            'ngAnimate',
            'ngTouch',
            'offClick',
            'angulartics',
            'angulartics.google.analytics'
        ]);
})();
