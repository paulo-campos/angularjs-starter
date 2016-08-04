(function () {
    'use strict';

    angular
        .module('angularjs-starter')
        .controller('AppRun', AppRun);

    AppRun.$inject = [
        '$window',
        'DataFactory',
        'ScreensConstant'
    ];

    /**
     * @namespace Run
     * @desc      Main control for device of the application
     * @memberOf  App
     */
    function AppRun ($window, DataFactory, ScreensConstant) {
        definingDevice();

        /**
         * @desc     Defines type of the device
         * @memberOf App.Run
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
