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
        const device = this;
        ////////////////

        device.type = 0;
        ////////////////////

        definingDevice();

        function definingDevice () {
            if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                device.type = 2;
                return false;
            }

            if (($window.innerWidth  > ScreensConstant.WIDTH.MAX.MOBILE) ||
                ($window.innerHeight > ScreensConstant.WIDTH.MAX.MOBILE)) {
                device.type = 1;
            }
        }
    }
}());
