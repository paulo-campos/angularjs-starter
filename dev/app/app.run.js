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

    function AppRun ($rootScope, $window) {
        $rootScope.safe = {};
        ////////////////////

        $rootScope.safe.device = function () {
            if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
                return 'desktop';
            
            if ($window.innerWidth > 400 && $window.innerHeight > 400)
                return 'tablet';
            
            return 'smartphone';
        }
    }
})();
