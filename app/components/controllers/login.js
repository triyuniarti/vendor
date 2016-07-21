'use strict';

angular.module('app.login', ['ngRoute', 'toastr'])

.controller('LoginController', ['$http', '$scope', '$location', '$cookies', 'toastr', function($http, $scope, $location, $cookies, toastr) {
	$scope.credentials = {};
	$location.path('/dashboard');

	$scope.getLogin = function(){
		$http.post('http://128.199.255.96/v1/shared/login', { email: $scope.credentials.email, password: $scope.credentials.password })
		.success( function(response){
			$cookies.put('token', response.token);
			if (response.token){
				$location.path('/dashboard');
			}
		})
		.error( function(response){
			toastr.error(response.message);
		});
	}
}]);
