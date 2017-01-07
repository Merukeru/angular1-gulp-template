'use strict';

/**
 * @ngdoc overview
 * @name angularGulpTemplate
 * @description
 * # angularGulpTemplate
 *
 * Main module of the application.
 */
angular
  .module('angularGulpTemplate', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ui.router',
    'ngSanitize',
    'ui.bootstrap'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: '../views/home.html',
        controller: 'HomeController as homeCtrl'
      })
      .state('components', {
        url: '/components',
        templateUrl: '../views/components.html',
        controller: 'ComponentsController as componentsCtrl'
      })
      .state('infos', {
        url: '/infos',
        templateUrl: '../views/infos.html',
        controller: 'InfosController as infosCtrl'
      });
  });
