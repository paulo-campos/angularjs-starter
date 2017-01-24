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
    }
})();
