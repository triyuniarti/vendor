'use strict';

var dashboard = angular.module('app.dashboard', ['ngRoute'])

dashboard
.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/dashboard', {
		templateUrl: 'dashboard/dashboard.html',
		controller: 'DashboardController'
	});
}])

.controller('DashboardController', [function() {

}])

.directive('navbarTemplate', function() {
	return {
		restrict: 'E',
		templateUrl: 'navbar/navbar.html'
	};
});