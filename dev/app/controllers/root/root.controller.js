(function () {
    'use strict';

    angular
        .module('angularjs-starter')
        .controller('RootController', RootController);

    RootController.$inject = [
        '$scope'
    ];

    /**
     * @namespace Base
     * @desc      Controls the scope of the base
     * @memberOf  App.Controllers
     */
    function RootController ($scope) {
        var base = this;
        ////////////////

        base.title = 'AngularJS Starter';
    }
})();
