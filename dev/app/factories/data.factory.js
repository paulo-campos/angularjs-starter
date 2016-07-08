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

        data.safe = null;
        ////////////////////

        var helper = {
            get: function () {
                return data.safe;
            },
            set: function (value) {
                data.safe = value;
            }
        };

        return helper;
    }
}());
