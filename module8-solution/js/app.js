(function () {
  'use strict';

  angular.module('NarrowItDownApp', [])
    .controller('NarrowItDownController', NarrowItDownController)
    .service('MenuSearchService', MenuSearchService)
    .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
    .directive('foundItems', FoundDirective);

  function FoundDirective() {
    var ddo = {
      templateUrl: 'menuList.html',
      scope: {
        items: '<',
        myTitle: '@title',
        onRemove: '&'
      },
      controller: FoundDirectiveController,
      controllerAs: 'list',
      bindToController: true
    };

    return ddo;
  }

  function FoundDirectiveController() {
    var list = this;

    list.nothingFound = function () {
      if (list.items.length == 0) {
        return true;
      } else {
        return false;
      }
    };
  }

  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService) {
    var list = this;

    // TODO: This constructor here is probably issue
    var menuItems = MenuSearchService();

    list.items = menuItems.getItems();
    var origTitle = "Matching Menu Items";
    list.title = origTitle + " (" + list.items.length + " items )";

    list.itemName = "";

    // TODO: Refactor for search
    list.addItem = function () {
      // TODO: Replace with getMatchedMenuItems(list.itemName);
      // menuItems.addItem(list.itemName, "E", "This is a test");
      list.title = origTitle + " (" + list.items.length + " items )";
    };

    list.removeItem = function (itemIndex) {
      this.lastRemoved = "Removed " + this.items[itemIndex].name;
      menuItems.removeItem(itemIndex);
      this.title = origTitle + " (" + list.items.length + " items )";
    };

    // TODO: Delete me. Sample Input
    // menuItems.addItem("Tester", "A", "I work");
    // menuItems.addItem("Testing", "B", "Woot");
    // menuItems.addItem("Tested", "C", "Hi");
  }

  // TODO: Refactor or remove maxItems
  // If not specified, maxItems assumed unlimited
  function ShoppingListService(maxItems) {
    maxItems = 0;
    var service = this;

    // List of shopping items
    var items = [];
    // TODO: Prepopulate this method 

    // TODO: Constructor still expects second field quantity
    service.addItem = function (itemName, shortName, descrip) {
      var item = {
        name: itemName,
        short_name: shortName,
        description: descrip
      };
      items.push(item);
    };

    service.removeItem = function (itemIndex) {
      items.splice(itemIndex, 1);
    };

    // TODO: Delete this method?
    service.getItems = function () {
      return items;
    };

    // TODO: Use this method with input to match search parameter
    service.getMatchedMenuItems = function () {
      return items;
    };
  }

  function MenuSearchService() {
    var factory = function (maxItems) {
      return new ShoppingListService(maxItems);
    };

    return factory;
  }

})();
