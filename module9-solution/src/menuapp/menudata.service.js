(function () {
'use strict';

angular.module('MenuApp')
.service('MenuDataService', MenuDataService);

MenuDataService.$inject = ['$http', '$q', '$timeout']
function MenuDataService($http, $q, $timeout) {
  var service = this;

  service.getAllCategories = function () {
    return $http({
      method: "GET",
      url: ("https://davids-restaurant.herokuapp.com/categories.json")
    }).then(function (response) {
        return response.data;
    });
  };
  
  // service.getItemsForCategory = function (categoryShortName) {
  service.getItemsForCategory = function () {
    return $http({
      method: "GET",
      url: ("https://davids-restaurant.herokuapp.com/menu_items.json"),
      params: {
        category: "L"
      }
    }).then(function (response) {
      return response.data.menu_items;
    });
  };
  
}

})();
