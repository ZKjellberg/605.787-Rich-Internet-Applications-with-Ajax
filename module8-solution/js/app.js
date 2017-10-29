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

    // TODO: Fix this method
    list.nothingFound = function () {
      /*if (list.items.length == 0) {
        return true;
      } else {
        return false;
      }*/
    };
  }

  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService) {
    var list = this;

    // TODO: This constructor here is probably issue
    // var menuItems = MenuSearchService();

    // list.items = menuItems.getItems();
    var origTitle = "Matching Menu Items";
    // TODO: Fix this length
    // list.title = origTitle + " (" + list.items.length + " items )";

    list.itemName = "";

    // TODO: Empty list message
    // TODO: Null input, prevent results

    // TODO: Refactor for search
    list.addItem = function () {
      // TODO: Make searchTerm dynamic, attached to button and user input
      var searchTerm = list.itemName;

      var promise = MenuSearchService.getMatchedMenuItems(searchTerm);
      promise
        .then(function (response) {
          list.items = response;
        })
        .catch(function (error) {
          console.log("Something went terribly wrong.");
        });

      // TODO: Length is undefined
      // list.title = origTitle + " (" + list.items.length + " items )";
    };

    list.removeItem = function (itemIndex) {
      this.lastRemoved = "Removed " + this.items[itemIndex].name;
      // TODO: Migrate removeItem into Controller
      // menuItems.removeItem(itemIndex);

      // TODO: Length is undefined
      // this.title = origTitle + " (" + list.items.length + " items )";
    };
  }

  // TODO: Refactor or remove maxItems
  // If not specified, maxItems assumed unlimited
  // function ShoppingListService(maxItems) {
  //   maxItems = 0;
  //   var service = this;

  //   // List of shopping items
  //   var items = [];
  //   // TODO: Prepopulate this method 

  //   // TODO: Constructor still expects second field quantity
  //   service.addItem = function (itemName, shortName, descrip) {
  //     var item = {
  //       name: itemName,
  //       short_name: shortName,
  //       description: descrip
  //     };
  //     items.push(item);
  //   };

  //   service.removeItem = function (itemIndex) {
  //     items.splice(itemIndex, 1);
  //   };

  //   // TODO: Delete this method?
  //   service.getItems = function () {
  //     return items;
  //   };

  //   // TODO: Use this method with input to match search parameter
  //   service.getMatchedMenuItems = function () {
  //     return items;
  //   };
  // }

  MenuSearchService.$inject = ['$http', 'ApiBasePath'];
  function MenuSearchService($http, ApiBasePath) {
    var service = this;

    service.getMatchedMenuItems = function (searchTerm) {
      return $http({
        method: "GET",
        url: (ApiBasePath + "/menu_items.json")
      })
        .then(function (response) {
          var foundItems = response.data.menu_items;

          foundItems = foundItems.filter(function (foundItems) {
            return foundItems.description.includes(searchTerm)
          });

          return foundItems;
        })
        .catch(function (error) {
          console.log("Something went terribly wrong.");
        });
    };
  }

})();
