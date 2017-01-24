(function () {
    'use strict';

    angular
        .module('angularjs-starter')
        .directive('imageLoad', ImageLoad);

    /**
     * @namespace ImageLoad
     * @desc      Executes when the image is loaded
     * @example   <img src="url-of-image" image-load="doSomething">
     * @memberOf  App.Directives
     */
    function ImageLoad () {
        var directive = {
            restrict : 'A',
            scope    : { onLoad: '=imageLoad' },
            link     : Link
        };

        return directive;
        ////////////////////

        /**
         * @desc      Binds image the load image
         * @param     {Object} $scope Data from scope
         * @param     {Object} $element Data from element
         * @memberOf  App.Directives.ImageLoad
         */
        function Link ($scope, $element) {
            $element.bind('load',  function () { onLoad($scope, $element); });
            $element.bind('error', function () {});
        }

        /**
         * @desc      Runs past method when the element is loaded
         * @param     {Object} $scope Data from scope
         * @param     {Object} $element Data from element
         * @memberOf  App.Directives.ImageLoad
         */
        function onLoad ($scope, $element) {
            $scope.$apply(function () {
                $scope.onLoad($element);
            });
        }
    }
})();
