(function () {
    'use strict';

    angular
        .module('angularjs-starter')
        .config(AppConfig);

    AppConfig.$inject = [
        '$compileProvider',
        '$sceDelegateProvider',
        '$httpProvider',
        '$urlRouterProvider',
        '$locationProvider',
        '$stateProvider'
    ];

    function AppConfig ($compileProvider, $sceDelegateProvider, $httpProvider, $urlRouterProvider, $locationProvider, $stateProvider) {
        $compileProvider.aHrefSanitizationWhitelist(/^\s*(whatsapp|http):/);
        $sceDelegateProvider.resourceUrlWhitelist(['**']);
        $httpProvider.interceptors.push('InterceptorHelper');
        $urlRouterProvider.otherwise('/');
        $locationProvider.html5Mode(true);

        $stateProvider
        .state('base', {
            url:         '/',
            templateUrl: 'app/partials/base/base.html',
            controller:  'BaseController'
        });
    }
}());
