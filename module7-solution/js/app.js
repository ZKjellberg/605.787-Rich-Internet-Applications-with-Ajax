(function() {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService)
    .filter('total', TotalFilter);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];

  function ToBuyController(ShoppingListCheckOffService) {
    var buyList = this;

    buyList.items = ShoppingListCheckOffService.getBuyItems();

    buyList.boughtItem = function(itemIndex) {
      ShoppingListCheckOffService.boughtItem(itemIndex);
    };
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService', 'totalFilter'];

  function AlreadyBoughtController(ShoppingListCheckOffService, totalFilter) {
    var boughtList = this;

    boughtList.items = ShoppingListCheckOffService.getItems();
    
    boughtList.getTotal = function () {
      return totalFilter();
    };
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
  
  function TotalFilter() {
    return function (input, quantity, pricePerItem) {
      input = input || "";
      input = "$$$" + (quantity * pricePerItem);
      return input;
    }
  }

})();
