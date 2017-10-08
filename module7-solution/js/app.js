(function() {
  'use strict';
  
  var shoppingList2 = [
    {
      name: "Milk",
      quantity: "2"
    },
    {
      name: "Donuts",
      quantity: "200"
    },
    {
      name: "Cookies",
      quantity: "300"
    },
    {
      name: "Chocolate",
      quantity: "5"
    }
  ];


  angular.module('ShoppingListCheckOff', [])
    // TODO: Figure out Service
    // .service('ShoppingListCheckOffService', ShoppingListCheckOffService)
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController);

  ToBuyController.$inject = ['$scope'];
  AlreadyBoughtController.$inject = ['$scope'];

  function ToBuyController($scope) {
    $scope.shoppingList2 = shoppingList2;
  }

  function AlreadyBoughtController($scope) {

  }

})();
