(function () {
    'use strict';

    angular
        .module('angularjs-starter')
        .service('InterceptorHelper', InterceptorService);

    InterceptorService.$inject = [
        '$rootScope'
    ];

    function InterceptorService ($rootScope) {

        var helper = {
            request: function (success) {
                return requestSuccess(success);
            },
            response: function (success) {
                return responseSuccess(success);
            },
            requestError:  function (error) {
                return requestError(error);
            },
            responseError: function (error) {
                return responseError(error);
            }
        };

        return helper;
        ////////////////////

        function requestSuccess (success) {
            $rootScope.$broadcast('request.success');
            return success;
        }

        function responseSuccess (success) {
            $rootScope.$broadcast('response.success');
            return success;
        }

        function requestError (error) {
            $rootScope.$broadcast('request.error');
            return error;
        }

        function responseError (error) {
            $rootScope.$broadcast('response.error');
            return error;
        }
    }
})();
