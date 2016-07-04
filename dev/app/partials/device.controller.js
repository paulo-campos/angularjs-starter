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
        var device = this;
        ////////////////

        device.type = {};
        ////////////////////

        definingDevice();

        function definingDevice () {
            if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                device.type.desktop = true;
                return device.type.desktop;
            }

            if (($window.innerWidth  > ScreensConstant.WIDTH.MAX.MOBILE) ||
                ($window.innerHeight > ScreensConstant.WIDTH.MAX.MOBILE)) {
                device.type.tablet = true;
                return device.type.desktop;
            }

            device.type.smartphone = true;
        }
    }
})();
