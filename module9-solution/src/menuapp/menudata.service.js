(function () {
'use strict';

angular.module('MenuApp')
.service('MenuDataService', MenuDataService);

MenuDataService.$inject = ['$q', '$timeout']
function MenuDataService($q, $timeout) {
  var service = this;

  // List of categories
  var categories = [];
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
  
    // List of items
  var items = [];
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

  // TODO: Replace this method with a REST call
  // Lecture 25 - https://davids-restaurant.herokuapp.com/categories.json
  service.getAllCategories = function () {
    var deferred = $q.defer();

    // Wait 2 seconds before returning
    $timeout(function () {
      // deferred.reject(items);
      deferred.resolve(categories);
    }, 800);

    return deferred.promise;
  };
  
  // TODO: Replace this method with a REST call
  // Module 8 - https://davids-restaurant.herokuapp.com/menu_items.json?category=
  // TODO: Add 'categoryShortName' to method input like service.getItemsForCategory(categoryShortName)
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
