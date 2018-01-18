(function () {
    'use strict';

    angular
        .module('angularjs-starter')
        .directive('repeaterEnd', RepeaterEnd);

    function RepeaterEnd () {
        var directive = {
            restrict : 'A',
            link     : Link
        };

        return directive;
        ////////////////////

        function Link ($scope) {
            if ($scope.$last)
                $scope.repeaterEnd();
        }
    }
})();
