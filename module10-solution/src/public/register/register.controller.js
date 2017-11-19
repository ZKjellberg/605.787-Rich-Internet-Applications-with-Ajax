(function () {
"use strict";

angular.module('public')
.controller('RegisterController', RegisterController);

RegisterController.$inject = ['MenuService'];
function RegisterController(MenuService) {
  var $ctrl = this;

  $ctrl.user = {
   'first_name' : '',
   'last_name' : '',
   'email' : '',
   'phone' : '',
   'menu_number' : ''
  }
  
  // Trying to move Controller
  $ctrl.submit = function() {
    $ctrl.savedUser = angular.copy($ctrl.user);

    // TODO: Make getFavorite dynamic. Remove historical code
    MenuService.getFavorite($ctrl.user.menu_number)
      .then(function(response) {
        $ctrl.menuFavorite = response;

        // Sample Success vs Fail display
        // TODO: How to detect error from service
        // if () {
          $ctrl.completed = true;
          $ctrl.failed = false;
        // } else {
        //   $ctrl.completed = false;
        //   $ctrl.failed = true;
        // }
      });
  };
}


})();
