(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);
    
LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.checkIfTooMuch = function () {
    // If user has not entered any value initially, $scope.name will be undefined
    if (!angular.isUndefined($scope.name)) {
      var input = $scope.name;
      // Use split() to count the characters
      var values = input.split(',');
      // Remove bad user input, such as blank values
      values = values.filter(Boolean);
      
      // Debug statements
      //console.log(values);
      //console.log(values.length);
      
      // Array[""] shows as length of 1
      if (values.length > 0) {
        $scope.lunchResultCSS = "color:green;border: 1px solid green;";
        if (values.length <= 3) {
          $scope.lunchResult = "Enjoy!";
        } else {
          $scope.lunchResult = "Too much!"; 
        }
      } else {
        $scope.lunchResultCSS = "color:red;border: 1px solid red;";
        $scope.lunchResult = "Please enter data first";
      }
    } else {
      $scope.lunchResult = "Please enter data first";
      $scope.lunchResultCSS = "color:red;border: 1px solid red;";
    }
  };
}

})();