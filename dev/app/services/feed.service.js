(function () {
    'use strict';

    angular
        .module('angularjs-starter')
        .service('FeedService', FeedService);

    FeedService.$inject = [
        '$rootScope',
        '$http'
    ];

    function FeedService ($rootScope, $http) {
        var service = { request : sendRequest };

        return service;
        ////////////////////

        function sendRequest (api, params) {
            var request = {
                method : 'GET',
                url    : service,
                params : (params ? params : {})
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
