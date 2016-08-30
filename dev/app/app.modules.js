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
            'ngResource',
            'ngTouch',
            'offClick',
            '720kb.socialshare',
            'angulartics',
            'angulartics.google.analytics'
        ]);
})();
