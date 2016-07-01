(function () {
    'use strict';

    angular
        .module('angularjs-starter')
        .constant('ScreensConstant', {
            WIDTH : {
                MAX : {
                    DESKTOP    : 1920,
                    TABLET     : 1200,
                    SMARTPHONE : 800
                }
            }
        });
}());
