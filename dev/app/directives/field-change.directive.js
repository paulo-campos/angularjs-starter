(function () {
    'use strict';

    angular
        .module('angularjs-starter')
        .directive('fieldChange', FieldChange);

    /**
     * @namespace FieldChange
     * @desc      Executes when the field changes
     * @example   <input type="some-type" name="some-name" ng-model="some.model" input-change="doSomething">
     * @memberOf  App.Directives
     */
    function FieldChange () {
        var directive = {
            restrict : 'A',
            scope    : { onChange: '=fieldChange' },
            link     : Link
        };

        return directive;
        ////////////////////

        /**
         * @desc      Binds to change any element child
         * @param     {Object} $scope Data from scope
         * @param     {Object} $element Data from element
         * @memberOf  App.Directives.FieldChange
         */
        function Link ($scope, $element) {
            $element.on('input textarea select', function () { onChange($scope, $element); });
        }

        /**
         * @desc      Runs past method when the element changes
         * @param     {Object} $scope Data from scope
         * @param     {Object} $element Data from element
         * @memberOf  App.Directives.FieldChange
         */
        function onChange ($scope, $element) {
            $scope.$apply(function () {
                $scope.onChange($element);
            });
        }
    }
})();
