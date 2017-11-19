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
    $httpBackend.whenGET(ApiPath + '/menu_items/' + 'A10' + '.json')
      .respond({id: 10, short_name: "A10"});

    menuFavorite.getFavorite("A10")
      .then(function(response) {
        expect(response)
          .toEqual({id: 10, short_name: "A10"});
      }
    );
    $httpBackend.flush();
  });
});
