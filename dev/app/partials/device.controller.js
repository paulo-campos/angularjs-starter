(function () {
    'use strict';

    angular
        .module('angularjs-starter')
        .controller('DeviceController', DeviceController);

    DeviceController.$inject = [
        '$window',
        'DataFactory',
        'ScreensConstant'
    ];

    /**
     * @namespace Device
     * @desc      Controls the scope of the device
     * @memberOf  App.Controllers
     */
    function DeviceController ($window, DataFactory, ScreensConstant) {
        definingDevice();

        /**
         * @desc     Defines type of the device
         * @memberOf App.Controllers.Device
         */
        function definingDevice () {
            if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
                DataFactory.request.device = { desktop : true };
            else if (
                ($window.innerWidth  > ScreensConstant.WIDTH.MAX.SMARTPHONE) ||
                ($window.innerHeight > ScreensConstant.WIDTH.MAX.SMARTPHONE)) {
                DataFactory.request.device = { tablet : true };
            }
            else
                DataFactory.request.device = { smartphone : true };
        }
    }
})();
