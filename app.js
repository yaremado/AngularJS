(function () {
'use strict';

angular.module('myFirstApp', [])

.controller('MyFirstController', function ($scope) {

  $scope.list_item = "";
  $scope.message = "";

  $scope.itemCalc = function(){
    var item_num = 0;
    if ($scope.list_item != ""){
   item_num = calcStringItem($scope.list_item)
    if (item_num > 3) $scope.message = "Too much";
    if (item_num <= 3) $scope.message = "Good";
    }
  };

function calcStringItem(string){
var value = 0;
var arrays = string.split(',');
return value = arrays.length;
};

});

})();
