(function () {
    'use strict';

    angular
        .module('angularjs-starter')
        .config(AppConfig);

    AppConfig.$inject = [
        '$httpProvider',
        '$urlRouterProvider',
        '$stateProvider'
    ];

    /**
     * @namespace Config
     * @desc      Main settings of the application
     * @memberOf  App
     */
    function AppConfig ($httpProvider, $urlRouterProvider, $stateProvider) {
        $httpProvider.interceptors.push('InterceptorFactory');
        $urlRouterProvider.otherwise('/');

        $stateProvider
        .state('base', {
            url          : '/',
            templateUrl  : 'app/partials/base/base.html',
            controller   : 'BaseController',
            controllerAs : 'base'
        });
    }
})();
