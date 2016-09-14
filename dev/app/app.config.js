(function () {
    'use strict';

    angular
        .module('angularjs-starter')
        .config(AppConfig);

    AppConfig.$inject = [
        '$compileProvider',
        '$httpProvider',
        '$urlRouterProvider',
        '$stateProvider'
    ];

    /**
     * @namespace Config
     * @desc      Main settings of the application
     * @memberOf  App
     */
    function AppConfig ($compileProvider, $httpProvider, $urlRouterProvider, $stateProvider) {
        $compileProvider.aHrefSanitizationWhitelist(/^\s*(whatsapp|https|http):/);
        $httpProvider.interceptors.push('InterceptorFactory');
        $urlRouterProvider.otherwise('/');

        $stateProvider
        .state('base', {
            url          : '/',
            templateUrl  : 'app/partials/base.html',
            controller   : 'BaseController',
            controllerAs : 'base'
        });
    }
})();
