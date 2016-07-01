(function () {
    'use strict';

    angular
        .module('angularjs-starter')
        .controller('DeviceController', DeviceController);

    DeviceController.$inject = [
        '$scope',
        '$window',
        'ScreensConstant'
    ];

    function DeviceController ($scope, $window, ScreensConstant) {

        /*
         * 0 = Smartphone
         * 1 = Tablet
         * 2 = Desktop
         */
        $scope.deviceType = 0;
        ////////////////////

        definingDevice();

        function definingDevice () {
            if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                $scope.deviceType = 2;
                return false;
            }

            if (($window.innerWidth  > ScreensConstant.WIDTH.MAX.MOBILE) ||
                ($window.innerHeight > ScreensConstant.WIDTH.MAX.MOBILE)) {
                $scope.deviceType = 1;
            }
        }
    }
}());
