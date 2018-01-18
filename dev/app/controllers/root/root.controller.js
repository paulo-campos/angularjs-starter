(function () {
    'use strict';

    angular
        .module('angularjs-starter')
        .controller('RootController', RootController);

    RootController.$inject = [
        '$scope'
    ];

    function RootController ($scope) {
        var root = this;
        ////////////////

        root.title = 'AngularJS Starter';
    }
})();
