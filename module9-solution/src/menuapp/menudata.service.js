(function () {
'use strict';

angular.module('MenuApp')
.service('MenuDataService', MenuDataService);

MenuDataService.$inject = ['$q', '$timeout']
function MenuDataService($q, $timeout) {
  var service = this;

  // List of categories
  var categories = [];

  // Pre-populate a no cookie list
  categories.push({
    short_name: "DS",
    name: "Desserts",
  });
  categories.push({
    short_name: "D",
    name: "Dinner Combo",
  });
  categories.push({
    short_name: "SR",
    name: "Sushi Menu",
  });

  // Simulates call to server
  // Returns a promise, NOT items array directly
  // TODO: Replace this method with a REST call to categories.json
  service.getAllCategories = function () {
    var deferred = $q.defer();

    // Wait 2 seconds before returning
    $timeout(function () {
      // deferred.reject(items);
      deferred.resolve(categories);
    }, 800);

    return deferred.promise;
  };
  
  // List of items
  var items = [];

  // Pre-populate a no cookie list
  items.push({
    name: "Hot and Sour Soup",
    description: "tofu, chicken, mushroom, bamboo shoot, and egg"
  });
  items.push({
    name: "Garden Vegetable Soup with Tofu",
    description: "clear chicken broth with mixed vegetables (carrots, cabbage, baby corn, mushroom, snow peas)"
  });
  items.push({
    name: "Fried Silky Tofu with Special Garlic Sauce",
    description: "4 large tofu cubes, breaded and deep-fried, with garlic sauce on the side"
  });
  
  // TODO: service.getItemsForCategory(categoryShortName)
  service.getItemsForCategory = function () {
    var deferred = $q.defer();

    // Wait 2 seconds before returning
    $timeout(function () {
      // deferred.reject(items);
      deferred.resolve(items);
    }, 800);

    return deferred.promise;
  };
  
}

})();
