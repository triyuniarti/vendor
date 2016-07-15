'use strict';

// Declare app level module which depends on views, and components
angular.module('app', [
  'ngRoute',
  'app.login',
  'app.view1',
  'app.view2'
])
.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  /*$locationProvider.hashPrefix('!');*/

  $routeProvider.otherwise({redirectTo: '/login'});
}]);
