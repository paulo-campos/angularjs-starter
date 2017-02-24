(function () {
    'use strict';

    angular
        .module('angularjs-starter')
        .run(AppRun);

    AppRun.$inject = [
        '$rootScope',
        '$window',
        'ScreensConstant'
    ];

    /**
     * @namespace Run
     * @desc      Main control for device of the application
     * @memberOf  App
     */
    function AppRun ($rootScope, $window, ScreensConstant) {
        $rootScope.safe = {};
        ////////////////////

        definingDevice();

        /**
         * @desc     Defines type of the device
         * @memberOf App.Run
         */
        function definingDevice () {
            if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
                $rootScope.safe.device = 'desktop';
            else if (
                ($window.innerWidth  > ScreensConstant.WIDTH.MAX.SMARTPHONE) ||
                ($window.innerHeight > ScreensConstant.WIDTH.MAX.SMARTPHONE)) {
                $rootScope.safe.device = 'tablet';
            }
            else
                $rootScope.safe.device = 'smartphone';
        }
    }
})();
