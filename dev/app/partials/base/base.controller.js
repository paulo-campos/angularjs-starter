(function () {
    'use strict';

    angular
        .module('angularjs-starter')
        .controller('BaseController', BaseController);

    BaseController.$inject = [ '$scope' ];

    /**
     * @namespace Base
     * @desc      Controls the scope of the base
     * @memberOf  App.Controllers
     */
    function BaseController ($scope) {
        var base = this;
        ////////////////

        base.title = 'AngularJS Starter';
        ////////////////

        $scope.$on('request.success',  function () {});
        $scope.$on('response.success', function () {});
        $scope.$on('request.error',    function () {});
        $scope.$on('response.error',   function () {});
    }
})();
