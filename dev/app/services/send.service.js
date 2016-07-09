(function () {
    'use strict';

    angular
        .module('angularjs-starter')
        .factory('SendService', SendService);

    SendService.$inject = [
        '$http',
        '$log'
    ];

    /**
     * @namespace Send
     * @desc      Application data delivery to APIs
     * @memberOf  App.Services
     */
    function SendService ($http, $log) {
        var service = {
            request: function (service, data) {
                return sendRequest(service, data);
            }
        };

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
                headers : {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
                }
            };

            return $http.post(request)
                .then(responseSuccess, responseFailed);
        }

        /**
         * @desc     Executes if there was success in the data send
         * @param    {Object} response Data of response
         * @returns  {Object} response Data of response
         * @memberOf App.Services.Send
         */
        function responseSuccess (response, status, headers, config) {
            return response;
        }

        /**
         * @desc     Executes if not there was success in the data send
         * @memberOf App.Services.Send
         */
        function responseFailed (response, status, headers, config) {
            $log.error('Response: ' + response);
            $log.error('Status:   ' + status);
            $log.error('Headers:  ' + headers);
            $log.error('Config:   ' + config);
        }
    }
})();
