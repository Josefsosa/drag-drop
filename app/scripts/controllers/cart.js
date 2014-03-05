'use strict';

  angular.module('angularDragdropApp').controller('CartCtrl', function ($scope, shoeFactory){

    function init() {
      $scope.productList = shoeFactory.getShoes();
    }

   init();

  });