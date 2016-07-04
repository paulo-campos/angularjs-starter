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

    /**
     * @namespace Device
     * @desc      Controls the scope of the device
     * @memberOf  App.Controllers
     */
    function DeviceController ($scope, $window, ScreensConstant) {
        var device = this;
        ////////////////

        device.type = {};
        ////////////////////

        definingDevice();

        /**
         * @desc      Defines type of the device
         * @memberOf  App.Controllers.Device
         */
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
