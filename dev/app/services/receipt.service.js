(function () {
    'use strict';

    angular
        .module('angularjs-starter')
        .factory('ReceiptService', ReceiptService);

    ReceiptService.$inject = [
        '$http',
        '$log'
    ];

    /**
     * @namespace Receipt
     * @desc      Request data APIs for the application
     * @memberOf  App.Services
     */
    function ReceiptService ($http, $log) {
        var service = {
            request: function (service) {
                return sendRequest(service);
            }
        };

        return service;
        ////////////////////

        /**
         * @desc     Requests data from API
         * @param    {String} service API from use for request
         * @memberOf App.Services.Receipt
         */
        function sendRequest (service) {
            var request = {
                method : 'GET',
                url    : service
            };

            return $http(request)
                .then(responseSuccess, responseFailed);
        }

        /**
         * @desc     Executes if there was success in the data request
         * @param    {Object} response Data of response
         * @param    {Object} status Data of status
         * @param    {Object} headers Data of headers
         * @param    {Object} config Data of config
         * @returns  {Object} response Data of response
         * @memberOf App.Services.Receipt
         */
        function responseSuccess (response, status, headers, config) {
            return response;
        }

        /**
         * @desc     Executes if not there was success in the data request
         * @param    {Object} response Data of response
         * @param    {Object} status Data of status
         * @param    {Object} headers Data of headers
         * @param    {Object} config Data of config
         * @memberOf App.Services.Receipt
         */
        function responseFailed (response, status, headers, config) {
            $log.error('Response: ' + response);
            $log.error('Status:   ' + status);
            $log.error('Headers:  ' + headers);
            $log.error('Config:   ' + config);
        }
    }
})();
