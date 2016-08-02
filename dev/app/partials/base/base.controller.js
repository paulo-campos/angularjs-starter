(function () {
    'use strict';

    angular
        .module('angularjs-starter')
        .controller('BaseController', BaseController);

    BaseController.$inject = [
        '$scope',
        'DataFactory'
    ];

    /**
     * @namespace Base
     * @desc      Controls the scope of the base
     * @memberOf  App.Controllers
     */
    function BaseController ($scope, DataFactory) {
        var base = this;
        ////////////////

        base.title  = 'AngularJS Starter';
        base.device = DataFactory.request.device;
        // $scope.$on('request.success',  requestSuccess);
        // $scope.$on('response.success', responseSuccess);
        // $scope.$on('request.error',    requestError);
        // $scope.$on('response.error',   responseError);
        ////////////////

        // function requestSuccess (event, data) {}
        // function responseSuccess (event, data) {}
        // function requestError (event, data) {}
        // function responseError (event, data) {}
    }
})();
