(function () {
    'use strict';

    angular
        .module('angularjs-starter')
        .directive('inputChange', InputChange);

    /**
     * @namespace InputChange
     * @desc      Calls the method when a child element changes
     * @example   <input type="some-type" name="some-name" ng-model="some.model" input-change="doSomething">
     * @memberOf  App.Directives
     */
    function InputChange () {
        var directive = {
            restrict: 'A',
            scope: {
                onChange: '=inputChange'
            },
            link: Link
        };

        return directive;
        ////////////////////

        /**
         * @desc      Binds to change any element child
         * @param     {Object} $scope Data of the scope
         * @param     {Object} $element Data of the element
         * @memberOf  App.Directives.InputChange
         */
        function Link ($scope, $element) {
            $element.on('input textarea select', function() {
                $scope.$apply(function () {
                    $scope.onChange($element[0].id, $element[0].value);
                });
            });
        }
    }
})();
