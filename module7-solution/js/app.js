(function() {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];

  function ToBuyController(ShoppingListCheckOffService) {
    var buyList = this;

    buyList.items = ShoppingListCheckOffService.getBuyItems();

    buyList.boughtItem = function(itemIndex) {
      ShoppingListCheckOffService.boughtItem(itemIndex);
    };
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var boughtList = this;

    boughtList.items = ShoppingListCheckOffService.getItems();
  }

  function ShoppingListCheckOffService() {
    var service = this;

    var buyItems = [{
        name: "Milk",
        quantity: "2",
        pricePerItem: "10"
      },
      {
        name: "Donuts",
        quantity: "200",
        pricePerItem: "190"
      },
      {
        name: "Cookies",
        quantity: "300",
        pricePerItem: "50"
      },
      {
        name: "Chocolate",
        quantity: "5",
        pricePerItem: "15"
      }
    ];

    var boughtItems = [];

    service.boughtItem = function(itemIdex) {
      boughtItems.push(buyItems[itemIdex]);
      buyItems.splice(itemIdex, 1);
    };

    service.getBuyItems = function() {
      return buyItems;
    };

    service.getItems = function() {
      return boughtItems;
    };

  }

})();
