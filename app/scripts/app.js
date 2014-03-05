'use strict';

angular.module('angularDragdropApp', ['ngDragDrop', 'localStorage', 'monospaced.mousewheel'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/demo', {
        templateUrl: 'views/demo.html',
        controller: 'DemoCtrl'
      })
      .when('/cart', {
        templateUrl: 'views/cart.html',
        controller: 'CartCtrl'
      })
      .when('/line', {
        templateUrl: 'views/lineSheet.html',
        controller: 'lineSheetCtrl'
        })
      .otherwise({
        redirectTo: '/'
      });
  });
