(function () {
"use strict";

angular.module('public')
.controller('RegisterController', RegisterController);

RegisterController.$inject = ['menuFavorite'];
function RegisterController(menuFavorite) {
  var $ctrl = this;
  $ctrl.menuFavorite = menuFavorite;
  
  $ctrl.user = {
   'first_name' : '',
   'last_name' : '',
   'email' : '',
   'phone' : '',
   'menu_number' : ''
  }
  
  // Trying to move Controller
  $ctrl.submit = function() {
    // Sample Success vs Fail display
    if ($ctrl.user.menu_number == "A12") {
      $ctrl.completed = true;
      $ctrl.failed = false;
    } else {
      $ctrl.completed = false;
      $ctrl.failed = true;
    }
  };
}


})();
