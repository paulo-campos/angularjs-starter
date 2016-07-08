(function () {
    'use strict';

    angular
        .module('ionic-starter')
        .factory('SendService', SendService);

    SendService.$inject = [ '$http' ];

    /**
     * @namespace Send
     * @desc      Application data delivery to APIs
     * @memberOf  App.Services
     */
    function SendService ($http, $timeout, ServicesConstant) {
        var service = {
            send: function (service, data) {
                return sendData(service, data);
            }
        };

        return service;
        ////////////////////

        /**
         * @desc      Try send data to API
         * @param     {String} service API from use for request
         * @param     {Object} data Data of the send to API
         * @memberOf  App.Services.Send
         */
        function sendData (service, data) {
            var config = {
                headers : {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            };

            return $http.post(service, data, config)
                .then(responseSuccess, responseFailed);
        }

        /**
         * @desc      Executes if there was success in the data send
         * @param     {Object} response Data of response
         * @returns   {Object} response Data of response
         * @memberOf  App.Services.Send
         */
        function responseSuccess (response) {
            return response;
        }

        /**
         * @desc      Executes if not there was success in the data send
         * @memberOf  App.Services.Send
         */
        function responseFailed () {
            throw 'Problem to connect with service!';
        }
    }
})();
