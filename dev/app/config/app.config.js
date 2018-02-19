(function () {
    'use strict';

    angular
        .module('angularjs-starter')
        .config(AppConfig);

    AppConfig.$inject = [
        '$compileProvider',
        '$locationProvider',
        '$urlRouterProvider'
    ];

    function AppConfig ($compileProvider, $locationProvider, $urlRouterProvider) {
        $compileProvider.aHrefSanitizationWhitelist(/^\s*(https|http):/);
        $locationProvider.hashPrefix('');
        $urlRouterProvider.otherwise('/');
    }
})();
