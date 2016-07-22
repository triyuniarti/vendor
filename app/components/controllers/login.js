'use strict';

angular.module('app.login', ['ngRoute', 'angular-jwt', 'toastr'])

.controller('LoginController', ['$http', '$scope', '$location', '$cookies', 'toastr', 'jwtHelper', function($http, $scope, $location, $cookies, toastr, jwtHelper) {
	$scope.credentials = {};
	$location.path('/dashboard');

	$scope.getLogin = function(){
		$http.post('http://128.199.255.96/v1/shared/login', { email: $scope.credentials.email, password: $scope.credentials.password })
		.success( function(response){
			var role = jwtHelper.decodeToken(response.token).role;

			if (response.token && role == 'training_vendor'){
				$cookies.put('token', response.token);
				$location.path('/dashboard');
			}else {
				$cookies.remove('token');
				toastr.error('Email and password not registered.');
			}
		})
		.error( function(response){
			toastr.error(response.message);
		});
	}
}]);
