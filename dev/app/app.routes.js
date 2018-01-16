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
        .state('root', {
            url          : '/',
            templateUrl  : './app/controllers/root/root.html',
            controller   : 'RootController',
            controllerAs : 'root'
        });
    }
})();
