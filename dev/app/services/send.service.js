(function () {
    'use strict';

    angular
        .module('angularjs-starter')
        .service('SendService', SendService);

    SendService.$inject = [
        '$rootScope',
        '$http'
    ];

    function SendService ($rootScope, $http) {
        var service = { request : sendRequest };

        return service;
        ////////////////////

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

        function responseSuccess (response) {
            if (response.status !== 200)
                return responseFailed();

            return response.data;
        }

        function responseFailed () {
            $rootScope.$broadcast('response.failed');
        }
    }
})();
