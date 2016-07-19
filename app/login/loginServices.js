'use strict';

angular.module('app.login')

.factory('AuthenticationService', ['$http', '$cookies', '$rootScope', function ($http, $cookies, $rootScope) {
	var service = {};

	service.SetCredentials = function (email, password) {
		$rootScope.globals = {
			currentUser: {
				email: email,
				password: password
			}
		};

		if ($cookies.get('token')){
			$http.defaults.headers.common['Authorization'] = 'Bearer ' + $cookies.get('token');
			$cookies.put('globals', $rootScope.globals);
		}
	};

	service.ClearCredentials = function () {
		$rootScope.globals = {};
		$cookies.remove('globals');
		$http.defaults.headers.common.Authorization = 'Bearer ';
	};

	return service;
}]);