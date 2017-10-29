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
    var origTitle = "Matching Menu Items";
    
    list.items = [];
    list.title = "";
    list.itemName = "";

    list.getMatchedMenuItems = function () {
      var promise = MenuSearchService.getMatchedMenuItems(list.searchTerm);
      promise
        .then(function (response) {
          list.items = response;
          console.log(list.items.length);
          list.title = origTitle + " (" + list.items.length + " items)";
        })
        .catch(function (error) {
          console.log("Something went terribly wrong.");
        });
    };

    list.removeItem = function (itemIndex) {
      this.lastRemoved = "Removed " + this.items[itemIndex].name;
      list.items.splice(itemIndex, 1);
      
      this.title = origTitle + " (" + list.items.length + " items )";
    };
  }

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
