(function () {
    'use strict';

    angular
        .module('angularjs-starter')
        .directive('imageLoad', Imageload);

    function Imageload () {

        var directive = {
            restrict: 'A',
            scope: {
                imageOnLoad: '=imageload'
            },
            link: link
        };

        return directive;
        ////////////////////

        function link ($scope, $element) {
            $element.bind('load', function () {
                $scope.$apply(function () {
                    $scope.imageOnLoad($element);
                });
            });

            $element.bind('error', function () {});
        }
    }
})();
