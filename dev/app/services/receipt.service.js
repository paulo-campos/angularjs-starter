(function () {
    'use strict';

    angular
        .module('angularjs-starter')
        .service('ReceiptService', ReceiptService);

    ReceiptService.$inject = [
        '$rootScope',
        '$http'
    ];

    /**
     * @namespace Receipt
     * @desc      Request data APIs for the application
     * @memberOf  App.Services
     */
    function ReceiptService ($rootScope, $http) {
        var service = { request : sendRequest };

        return service;
        ////////////////////

        /**
         * @desc     Requests data from API
         * @param    {String} api API from use for request
         * @param    {Object} params Params from use for request
         * @memberOf App.Services.Receipt
         */
        function sendRequest (api, params) {
            var request = {
                method : 'GET',
                url    : service,
                params : (params ? params : {})
            };

            return $http(request)
                .then(responseSuccess, responseFailed);
        }

        /**
         * @desc     Executes if there was success in the data request
         * @param    {Object} response Data of response
         * @returns  {Object} response Data of response
         * @memberOf App.Services.Receipt
         */
        function responseSuccess (response) {
            if (response.status !== 200)
                return responseFailed();

            return response.data;
        }

        /**
         * @desc     Executes if not there was success in the data request
         * @memberOf App.Services.Receipt
         */
        function responseFailed () {
            $rootScope.$broadcast('response.failed');
        }
    }
})();
