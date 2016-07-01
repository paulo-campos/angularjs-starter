(function () {
    'use strict';

    angular
        .module('templates', []);

    angular
        .module('angularjs-starter', [
            'ui.router',
            'ngAnimate',
            'ngTouch',
            'angular-storage',
            'offClick',
            '720kb.socialshare',
            'angulartics',
            'angulartics.google.analytics'
        ]);
})();
