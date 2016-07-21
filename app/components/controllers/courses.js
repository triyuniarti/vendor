'use strict';

angular.module('app.courses', ['ngRoute', 'angular-ckeditor'])

.controller('CoursesController', ['$http', '$scope', function($http, $scope) {
      $http({
        method: 'GET',
        url: 'http://128.199.255.96/v1/training/courses'
      }).success(function (response) {
          $scope.courses = response.data;
      }).error(function (response) {
          alert(response.message);
      })
}]);
