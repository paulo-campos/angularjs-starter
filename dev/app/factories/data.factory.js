(function () {
    'use strict';

    angular
        .module('angularjs-starter')
        .factory('DataFactory', DataFactory);

    /**
     * @namespace Data
     * @desc      Saves the data that will move across the application
     * @memberOf  App.Factories
     */
    function DataFactory () {
        var data = this;

        data.safe = {};
        ////////////////////

        var factory = {
            request: data.safe
        };

        return factory;
    }
}());
