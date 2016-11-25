(function () {
'use strict';

angular.module('myFirstApp', [])

.controller('MyFirstController', function ($scope) {
  $scope.name = "Yaakov";
$scope.date = "today";
  $scope.sayHello = function () {
    return "Hello Coursera!";
  };
});

})();
