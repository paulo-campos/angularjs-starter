(function () {
    'use strict';

    angular
        .module('angularjs-starter')
        .config(AppConfig);

    AppConfig.$inject = [
        '$compileProvider',
        '$httpProvider'
    ];

    /**
     * @namespace Config
     * @desc      Main settings of the application
     * @memberOf  App
     */
    function AppConfig ($compileProvider, $httpProvider) {
        $compileProvider.aHrefSanitizationWhitelist(/^\s*(whatsapp|https|http):/);
        $httpProvider.interceptors.push('InterceptorFactory');
    }
})();
