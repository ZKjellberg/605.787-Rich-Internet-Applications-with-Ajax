(function () {
'use strict';

angular.module('MenuApp')
.service('MenuDataService', MenuDataService);

MenuDataService.$inject = ['$q', '$timeout']
function MenuDataService($q, $timeout) {
  var service = this;

  // List of items
  var items = [];

  // Pre-populate a no cookie list
  items.push({
    short_name: "S",
    name: "Sugar",
    description: "Sugar used for baking delicious umm... baked goods."
  });
  items.push({
    short_name: "F",
    name: "flour",
    description: "High quality wheat flour. Mix it with water, sugar, 2 raw eggs."
  });
  items.push({
    short_name: "C",
    name: "Chocolate Chips",
    description: "Put these in the dough. No reason, really. Gotta store them somewhere!"
  });

  // Simulates call to server
  // Returns a promise, NOT items array directly
  // TODO: Replace this method with a REST call to categories.json
  service.getAllCategories = function () {
    var deferred = $q.defer();

    // Wait 2 seconds before returning
    $timeout(function () {
      // deferred.reject(items);
      deferred.resolve(items);
    }, 800);

    return deferred.promise;
  };
  
  // TODO: service.getItemsForCategory(categoryShortName)
}

})();
