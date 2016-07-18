'use strict';

angular.module('app.courses', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider
		.when('/courses', {
			templateUrl: 'courses/list-courses.html',
			controller: 'CoursesController'
		})
		.when('/courses/create', {
			templateUrl: 'courses/create-courses.html',
			controller: 'CoursesController'
		});
}])

.controller('CoursesController', [function() {

}]);