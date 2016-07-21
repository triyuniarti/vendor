'use strict';

angular.module('app.courses', ['ngRoute'])

.controller('CoursesController', ['$http', '$scope', function($http, $scope) {
      $http({
        method: 'GET',
        url: 'http://128.199.255.96/v1/training/courses'
      }).success(function (response) {
          $scope.course = response.data;
      }).error(function (response) {
          alert(response.message);
      })
}]);
