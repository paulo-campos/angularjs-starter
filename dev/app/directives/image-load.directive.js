(function () {
    'use strict';

    angular
        .module('angularjs-starter')
        .directive('imageLoad', ImageLoad);

    function ImageLoad () {
        var directive = {
            restrict : 'A',
            scope    : { onLoad: '=imageLoad' },
            link     : Link
        };

        return directive;
        ////////////////////

        function Link ($scope, $element) {
            $element.bind('load',  function () { onLoad($scope, $element); });
            $element.bind('error', function () {});
        }

        function onLoad ($scope, $element) {
            $scope.$apply(function () {
                $scope.onLoad($element);
            });
        }
    }
})();
