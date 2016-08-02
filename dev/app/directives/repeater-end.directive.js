(function () {
    'use strict';

    angular
        .module('angularjs-starter')
        .directive('repeaterEnd', RepeaterEnd);

    RepeaterEnd.$inject = [ '$timeout' ];

    /**
     * @namespace RepeaterEnd
     * @desc      Gets event when the last child of repeater renders
     * @example   <div ng-repeat="item in list" repeater-end="doSomething"></div>
     * @memberOf  App.Directives
     */
    function RepeaterEnd ($timeout) {
        var directive = {
            restrict : 'A',
            link     : Link
        };

        return directive;
        ////////////////////

        /**
         * @desc      Binds the parameter url in window of browser
         * @param     {Object} $scope Data from scope
         * @memberOf  App.Directives.RepeaterEnd
         */
        function Link ($scope) {
            if ($scope.$last)
                $scope.repeaterEnd();
        }
    }
})();
