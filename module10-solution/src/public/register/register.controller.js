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
  
  // TODO: Migrate to user.html
  // var temp = MenuService.getUser();
  // if (temp !== null) {
  //   $ctrl.user = temp;
  // }

  // Trying to move Controller
  $ctrl.submit = function() {
    $ctrl.savedUser = angular.copy($ctrl.user);

    // TODO: Make getFavorite dynamic. Remove historical code
    MenuService.getFavorite($ctrl.user.menu_number)
      .then(function(response) {
        $ctrl.menuFavorite = response;

        $ctrl.completed = true;
        $ctrl.failed = false;

        MenuService.saveUser($ctrl.savedUser);
      })
      .catch(function(e) {
        $ctrl.completed = false;
        $ctrl.failed = true;
      });
  };
}


})();
