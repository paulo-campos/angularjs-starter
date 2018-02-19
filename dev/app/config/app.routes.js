(function () {
    'use strict';

    angular
        .module('angularjs-starter')
        .config(AppRoutes);

    AppRoutes.$inject = [
        '$stateProvider'
    ];

    function AppRoutes ( $stateProvider) {
        $stateProvider
            .state('root', {
                url          : '/',
                templateUrl  : './app/controllers/root/root.html',
                controller   : 'RootController',
                controllerAs : 'root'
            });
    }
})();
