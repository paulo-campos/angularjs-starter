(function () {
    'use strict';

    angular
        .module('angularjs-starter')
        .controller('DeviceController', DeviceController);

    DeviceController.$inject = [
        '$scope',
        '$window',
        'ScreenConstant'
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
                return $scope.deviceType = 2;
            }

            if (($window.innerWidth  > ScreenConstant.WIDTH.MAX.MOBILE) ||
                ($window.innerHeight > ScreenConstant.WIDTH.MAX.MOBILE)) {
                $scope.deviceType = 1;
            }
        }
    }
}());
