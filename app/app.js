'use strict';

// Declare app level module which depends on views, and components
angular.module('app', [
  'angular-jwt',
  'ngRoute',
  'ngAnimate',
  'ngCookies',
  'app.navbar',
  'app.login',
  'app.dashboard',
  'app.courses',
])
.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  /*$locationProvider.hashPrefix('!');*/
	$routeProvider
		.when('/login', {
			templateUrl: './components/views/login/index.html',
			controller: 'LoginController'
		})
		.when('/dashboard', {
			templateUrl: './components/views/dashboard/index.html',
			controller: 'DashboardController'
		})
		.when('/courses', {
			templateUrl: './components/views/courses/index.html',
			controller: 'CoursesController'
		})
		.when('/courses/create', {
			templateUrl: './components/views/courses/create.html',
			controller: 'CoursesController'
		})
  		.otherwise({redirectTo: '/dashboard'});
}])
.controller('AppController', ['$cookies', 'jwtHelper', '$location', function ($cookies, jwtHelper, $location) {
  var token = $cookies.get('token');
  var expToken = jwtHelper.isTokenExpired(token);

  if(expToken){
    $location.path('/login');
  }
}])
.run(['$rootScope', '$location', '$cookies', '$http', function ($rootScope, $location, $cookies, $http){
	$rootScope.$on('$locationChangeStart', function (event, next, current) {
		if (!$cookies.get('token')) {
			// redirect to login page if not logged in
			$location.path('/login');
		}else if ($cookies.get('token')) {
			// redirect to login page
			$http.defaults.headers.common.Authorization = 'Bearer ' + $cookies.get('token');
			$location.path();
		} else if ($cookies.get('')){
			// redirect to login page if cookies
			$location.path('/login');
			$cookies.remove('token');
			$http.defaults.headers.common.Authorization = 'Bearer ';
		}
	});
}]);
