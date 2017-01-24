(function () {
    'use strict';

    angular
        .module('angularjs-starter')
        .service('SendService', SendService);

    SendService.$inject = [
        '$rootScope',
        '$http'
    ];

    /**
     * @namespace Send
     * @desc      Application data delivery to APIs
     * @memberOf  App.Services
     */
    function SendService ($rootScope, $http) {
        var service = { request : sendRequest };

        return service;
        ////////////////////

        /**
         * @desc     Try send data to API
         * @param    {String} service API from use for request
         * @param    {Object} data Data of the send to API
         * @memberOf App.Services.Send
         */
        function sendRequest (service, data) {
            var request = {
                method  : 'POST',
                url     : service,
                data    : data,
                headers : { 'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8;' }
            };

            return $http(request)
                .then(responseSuccess, responseFailed);
        }

        /**
         * @desc     Executes if there was success in the data send
         * @param    {Object} response Data of response
         * @returns  {Object} response Data of response
         * @memberOf App.Services.Send
         */
        function responseSuccess (response) {
            if (response.status !== 200)
                return responseFailed();

            return response.data;
        }

        /**
         * @desc     Executes if not there was success in the data send
         * @memberOf App.Services.Send
         */
         function responseFailed () {
             $rootScope.$broadcast('response.failed');
         }
    }
})();
