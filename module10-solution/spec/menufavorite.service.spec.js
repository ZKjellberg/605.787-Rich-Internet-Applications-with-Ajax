describe('menucategories', function () {

  var menuFavorite;
  var $httpBackend;
  var ApiPath;

  beforeEach(function () {
    module('common');

    inject(function ($injector) {
      menuFavorite = $injector.get('MenuService');
      $httpBackend = $injector.get('$httpBackend');
      ApiPath = $injector.get('ApiPath');
    });
  });

  it('should return favorite item', function() {
    $httpBackend.whenGET(ApiPath + '/categories.json').respond(['Lunch', 'Dessert']);
    menuFavorite.getCategories()
      .then(function(response) {
        console.log(response);
        expect(response).toEqual(['Lunch', 'Dessert']);
      }
    );
    $httpBackend.flush();
  });

});
