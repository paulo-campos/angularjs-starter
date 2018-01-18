;(function(){

'use strict';

angular.module('angularjs-starter').run(['$templateCache', function($templateCache) {

  $templateCache.put('./app/controllers/root/root.html', '<div class="root device-{{ safe.device }}">\n	<h1 class="logo">\n		<img src="assets/images/angularjs.jpg" alt="{{ root.title }}" class="angularjs">\n	</h1>\n</div>\n');

}]);

})();