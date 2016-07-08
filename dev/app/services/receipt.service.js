(function () {
    'use strict';

    angular
        .module('ionic-starter')
        .factory('ReceiptService', ReceiptService);

    ReceiptService.$inject = [ '$http' ];

    /**
     * @namespace Receipt
     * @desc      Request data APIs for the application
     * @memberOf  App.Services
     */
    function ReceiptService ($http) {
        var service = {
            request: function (service) {
                return requestData(service);
            }
        };

        return service;
        ////////////////////

        /**
         * @desc      Requests data from API
         * @param     {String} service API from use for request
         * @memberOf  App.Services.Receipt
         */
        function requestData (service) {
            return $http.get(service)
                .then(responseSuccess, responseFailed);
        }

        /**
         * @desc      Executes if there was success in the data request
         * @param     {Object} response Data of response
         * @returns   {Object} response Data of response
         * @memberOf  App.Services.Receipt
         */
        function responseSuccess (response) {
            return response;
        }

        /**
         * @desc      Executes if not there was success in the data request
         * @memberOf  App.Services.Receipt
         */
        function responseFailed () {
            throw 'Problem to connect with service!';
        }
    }
})();
