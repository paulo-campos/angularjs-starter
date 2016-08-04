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

        // $scope.$on('request.success',  function () { requestRunning(true);  });
        // $scope.$on('response.success', function () { requestRunning(false); });
        ////////////////

        // function requestRunning (status) {}
    }
})();
