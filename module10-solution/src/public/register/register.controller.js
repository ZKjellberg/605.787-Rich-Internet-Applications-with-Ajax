(function () {
"use strict";

angular.module('public')
.controller('RegisterController', RegisterController);

RegisterController.$inject = ['menuFavorite'];
function RegisterController(menuFavorite) {
  var $ctrl = this;
  $ctrl.menuFavorite = menuFavorite
  
  // Trying to move Controller
  $ctrl.submit = function() {
    $ctrl.completed = true;
  };
}


})();
