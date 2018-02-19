(function () {
    'use strict';

    angular
        .module('angularjs-starter')
        .run(AppRun);

    AppRun.$inject = [
        '$rootScope',
        '$window'
    ];

    function AppRun ($rootScope, $window) {
        $rootScope.safe = {
            device  : 'smartphone',
            browser : ''
        };
        ////////////////////

        setDevice();
        setBrowser();

        function setDevice () {
            var pattern = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;

            if (!pattern.test(navigator.userAgent))                    return ($rootScope.safe.device = 'desktop');
            if ($window.innerWidth > 800 && $window.innerHeight > 800) return ($rootScope.safe.device = 'tablet');
        }

        function setBrowser () {
            $rootScope.browser = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
        }
    }
})();
