(function () {
    'use strict';

    angular
        .module('angularjs-starter')
        .directive('formChange', FormChange);

    FormChange.$inject = [ '$parse' ];

    /**
     * @namespace FormChange
     * @desc      Calls the method when a child element changes
     * @example   <input type="some-type" name="some-name" ng-model="some.model" input-change="doSomething">
     * @memberOf  App.Directives
     */
    function FormChange () {
        var directive = {
            restrict: 'A',
            scope: {
                onChange: '=formChange'
            },
            link: Link
        };

        return directive;
        ////////////////////

        /**
         * @desc      Binds to change any element child
         * @param     {Object} $scope Data of the scope
         * @param     {Object} $element Data of the element
         * @memberOf  App.Directives.FormChange
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
