'use strict';

angular.module('app.login', ['ngRoute'])

.controller('LoginController', ['$http', '$scope', '$location', '$cookies', function($http, $scope, $location, $cookies) {
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
			alert(response.message);
		});
	}
}]);