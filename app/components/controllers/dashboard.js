'use strict';

angular.module('app.dashboard', ['ngRoute'])

.controller('DashboardController', [function() {

}])

.directive('navbarTemplate', function() {
	return {
		restrict: 'E',
		templateUrl: '../../components/views/navbar/index.html'
	};
});
