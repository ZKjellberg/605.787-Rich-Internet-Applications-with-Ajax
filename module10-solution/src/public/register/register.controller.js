(function () {
"use strict";

angular.module('public')
.controller('RegisterController', RegisterController);

RegisterController.$inject = ['menuCategories'];
function RegisterController(menuCategories) {
  var $ctrl = this;
  $ctrl.menuCategories = menuCategories
  
  // Trying to move Controller
  $ctrl.submit = function() {
    $ctrl.completed = true;
  };
}


})();
