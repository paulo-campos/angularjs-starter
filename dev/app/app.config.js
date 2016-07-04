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

    function AppConfig ($httpProvider, $urlRouterProvider, $stateProvider) {
        $httpProvider.interceptors.push('InterceptorService');
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
