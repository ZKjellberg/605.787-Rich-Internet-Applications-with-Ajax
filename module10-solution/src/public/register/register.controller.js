(function () {
"use strict";

angular.module('public')
.controller('RegisterController', RegisterController);

RegisterController.$inject = ['menuFavorite', 'MenuService'];
function RegisterController(menuFavorite, MenuService) {
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
    // TODO: Make getFavorite dynamic. Remove historical code
    var test = MenuService.getFavorite($ctrl.user.menu_number);
    console.log(test);
    
    // Sample Success vs Fail display
    // TODO: How to detect error from service
    // if () {
      $ctrl.completed = true;
      $ctrl.failed = false;
    // } else {
    //   $ctrl.completed = false;
    //   $ctrl.failed = true;
    // }
  };
}


})();
