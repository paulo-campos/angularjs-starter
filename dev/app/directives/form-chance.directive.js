(function () {
    'use strict';

    angular
        .module('angularjs-starter')
        .directive('formChange', FormChange);

    /**
     * @namespace FormChange
     * @desc      Calls the method when a child element changes
     * @example   <form form-change="doSomething()"></form>
     * @memberOf  App.Directives
     */
    function FormChange () {
        var directive = {
            restrict: 'A',
            scope: {
                onChange: '=change'
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
