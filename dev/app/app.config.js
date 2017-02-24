(function () {
    'use strict';

    angular
        .module('angularjs-starter')
        .config(AppConfig);

    AppConfig.$inject = [
        '$compileProvider'
    ];

    /**
     * @namespace Config
     * @desc      Main settings of the application
     * @memberOf  App
     */
    function AppConfig ($compileProvider) {
        $compileProvider.aHrefSanitizationWhitelist(/^\s*(whatsapp|https|http):/);
    }
})();
