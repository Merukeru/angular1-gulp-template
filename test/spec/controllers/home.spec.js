'use strict';

describe('Controller: HomeController', function () {

  // load the controller's module
  beforeEach(module('angularGulpTemplate'));

  var homeController,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    homeController = $controller('HomeController', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(homeController).toBeDefined();
    expect(homeController.title).toBeDefined();
    expect(homeController.title).toBe('AngularJS Template');
  });
});
