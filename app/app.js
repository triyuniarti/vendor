'use strict';

// Declare app level module which depends on views, and components
angular.module('app', [
  'angular-jwt',
  'ngRoute',
  'ngCookies',
  'app.login',
  'app.dashboard',
  'app.courses',
])
.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  /*$locationProvider.hashPrefix('!');*/
	$routeProvider
		.when('/login', {
			templateUrl: 'login/login.html',
			controller: 'LoginController'
		})
		.when('/dashboard', {
			templateUrl: 'dashboard/dashboard.html',
			controller: 'DashboardController'
		})
		.when('/courses', {
			templateUrl: 'courses/list-courses.html',
			controller: 'CoursesController'
		})
		.when('/courses/create', {
			templateUrl: 'courses/create-courses.html',
			controller: 'CoursesController'
		})
  		.otherwise({redirectTo: '/dashboard'});
}])
.run(['$rootScope', '$location', '$cookies', '$http', function ($rootScope, $location, $cookies, $http){
	$rootScope.$on('$locationChangeStart', function (event, next, current) {
		if (!$cookies.get('token')) {
			// redirect to login page if not logged in
			$location.path('/login');
		}else if ($cookies.get('token')) {
			// redirect to login page
			$http.defaults.headers.common['Authorization'] = 'Bearer ' + $cookies.get('token');
			$location.path();
		} else if ($cookies.get('')){
			// redirect to login page if cookies 
			$location.path('/login');
		}
	});
}]);
