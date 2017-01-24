(function () {
    'use strict';

    angular
        .module('angularjs-starter')
        .controller('BaseController', BaseController);

    BaseController.$inject = [
        '$scope'
    ];

    /**
     * @namespace Base
     * @desc      Controls the scope of the base
     * @memberOf  App.Controllers
     */
    function BaseController ($scope) {
        var base = this;
        ////////////////

        base.title = 'AngularJS Starter';

        // $scope.$on('request.success',  function () { requestRunning(true);  });
        // $scope.$on('response.success', function () { requestRunning(false); });
        ////////////////

        // function requestRunning (status) {}
    }
})();
