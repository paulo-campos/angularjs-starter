(function () {
    'use strict';

    angular
        .module('angularjs-starter')
        .directive('imageLoad', ImageLoad);

    /**
     * @namespace ImageLoad
     * @desc      Calls the method when the image is loaded
     * @example   <img src="url-of-image" image-load="doSomething">
     * @memberOf  App.Directives
     */
    function ImageLoad () {
        var directive = {
            restrict: 'A',
            scope: {
                onLoad: '=imageLoad'
            },
            link: Link
        };

        return directive;
        ////////////////////

        /**
         * @desc     Binds image the load image
         * @param    {Object} $scope Scope of the scope
         * @param    {Object} $element The element
         * @memberOf App.Directives.ImageLoad
         */
        function Link ($scope, $element) {
            $element.bind('load', function () {
                $scope.$apply(function () {
                    $scope.onLoad($element);
                });
            });

            $element.bind('error', function () {});
        }
    }
})();
