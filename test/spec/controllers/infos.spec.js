'use strict';

describe('Controller: HomeController', function () {

  // load the controller's module
  beforeEach(module('angularGulpTemplate'));

  var infosController,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    infosController = $controller('InfosController', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(infosController).toBeDefined();
    expect(infosController.title).toBeDefined();
    expect(infosController.title).toBe('Infos');
  });
});
