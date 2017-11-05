(function () {
'use strict';

angular.module('MenuApp')
.component('shoppingList', {
  templateUrl: 'src/menuapp/templates/shoppinglist.template.html',
  bindings: {
    items: '<'
  }
});

})();
