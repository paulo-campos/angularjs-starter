(function () {
    'use strict';

    angular
        .module('angularjs-starter')
        .controller('BaseController', BaseController);

    BaseController.$inject = [
        '$scope'
    ];

    function BaseController ($scope) {

        $scope.title = 'AngularJS Starter';
        ////////////////

        $scope.$on('request.success',  function () {});
        $scope.$on('response.success', function () {});
        $scope.$on('request.error',    function () {});
        $scope.$on('response.error',   function () {});

    }
}());
