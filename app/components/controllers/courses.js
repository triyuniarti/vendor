'use strict';

angular.module('app.courses', ['ngRoute'])

.controller('CoursesController', ['$http', '$scope', 'toastr', '$location', function($http, $scope, toastr, $location) {
      var url = 'http://128.199.255.96/v1/training/courses/';

      //get list courses from API
      $http({
        method: 'GET',
        url: url
      }).success(function (response) {
          $scope.courses = response.data;
      }).error(function (response) {
          alert(response.message);
      })

      //get categories
      $http({
        method: 'GET',
        url: 'http://128.199.255.96/v1/training/categories'
      }).success(function (response) {
        $scope.categories = response.data;
      }).error(function (response) {
        toastr.error(response.message);
      })

      //create courses
      $scope.createCourse = function () {
        $http({
          method: 'POST',
          url: url,
          data: {
            'name' : $scope.name,
            'price' : $scope.price,
            'category_id' : $scope.category_id,
            'description' : $scope.description
          }
        })
        .success(function(response) {
          $scope.data = response.data;
          toastr.success(response.message, 'Success');
          $location.path('/courses');
        })
        .error(function(response) {
          toastr.error(response.message);
        });
      }

      //update courses
      $scope.getCourseByID = function (id) {
        $http({
          method: 'GET',
          url: url+id
        })
        .success(function (response) {
            $scope.coursesById = response.data;
        }).error(function (response) {
            alert(response.message);
        });
      }

      //delete courses
      $scope.deleteCourse = function (id) {
        $http({
          method: 'DELETE',
          url: url+id
        })
        .success(function (response) {
          $scope.data = response.data;
          toastr.success(response.message);
        })
        .error(function (response) {
          toastr.error(response.message);
        });
      }
}]);
