(function () {
    'use strict';

    angular
        .module('angularjs-starter')
        .directive('formChange', FormChange);

    function FormChange () {

        var directive = {
            restrict: 'A',
            scope: {
                onChange: '=change'
            },
            link: link
        };

        return directive;
        ////////////////////

        function link ($scope, $element) {
            $element.on('input textarea select', function() {
                $scope.$apply(function () {
                    $scope.onChange($element[0].id, $element[0].value);
                });
            });
        }
    }
})();
