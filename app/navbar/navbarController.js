'use strict';

angular.module('app.navbar', [])

.controller('NavbarController', ['$scope', '$location', '$cookies', function($scope, $location, $cookies) {
	$scope.logout = function(){
		$cookies.remove('token');
		$location.path('/login');
	}
}]);