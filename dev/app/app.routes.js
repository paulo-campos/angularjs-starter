(function () {
    'use strict';

    angular
        .module('angularjs-starter')
        .config(AppRoutes);

    AppRoutes.$inject = [
        '$urlRouterProvider',
        '$stateProvider'
    ];

    /**
     * @namespace Routes
     * @desc      Routes of the application
     * @memberOf  App
     */
    function AppRoutes ($urlRouterProvider, $stateProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
        .state('base', {
            url          : '/',
            templateUrl  : 'app/controllers/base/base.html',
            controller   : 'BaseController',
            controllerAs : 'base'
        });
    }
})();
