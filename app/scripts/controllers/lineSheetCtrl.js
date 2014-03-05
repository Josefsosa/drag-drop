'use strict';

angular.module('angularDragdropApp').controller('lineSheetCtrl', function ($scope, productFactory){
  $scope.name   = "Conductive Select";
  $scope.currentPage = 0;
  $scope.pageSize = 10;
  $scope.productList = [];

  $scope.setCurrentPage = function(currentPage) {
    $scope.currentPage = currentPage;
  }

  function init() {
    $scope.productList = productFactory.getItems();
  }

  $scope.loadData = function() {
    $scope.setCurrentPage($scope.currentPage)
  };


  $(window).bind('mousewheel', function(event) {
    if (event.originalEvent.wheelDelta >= 0) {
      $scope.currentPage--
      $scope.$apply();
    }
    else {
      $scope.currentPage++
      $scope.$apply();
    }
  });

  init();

});

angular.module('angularDragdropApp').filter('startFrom', function() {
  return function(input, start) {
    return input.slice(start);
  };
});

angular.module('angularDragdropApp').directive('whenScrolled', function() {
  return function(scope, elm, attr) {
    var raw = elm[0];

    elm.bind('scroll', function() {
      if (raw.scrollTop + raw.offsetHeight >= raw.scrollHeight) {
        scope.$apply(attr.whenScrolled);
      }
    });
  };
});

angular.module('angularDragdropApp').directive('onMouseWheel', function() {
  return function(scope, elm, attr) {
    $(window).bind('mousewheel', function() {
      if (event.originalEvent.wheelDelta >= 0) {
        scope.currentPage--
        scope.$apply(attr.onMouseWheel);
      }
      else {
        scope.currentPage++
        scope.$apply(attr.onMouseWheel);
      }
    });
  };
});

//angular.module('angularDragdropApp').directive('postRepeatTimer',
//['$timeout', '$log',
//  function($timeout, $log) {
//    var start, end;
//    var reStart = false;
//    return function(scope, element, attrs) {
//      if (scope.$first || reStart) {
//        start = new Date();
//        reStart = false;
//      } else if (scope.$last){
//        scope.$parent.scrollingTime = (new Date()) - start;
//        reStart = true;
//      }
//    };
//  }
//]);

//angular.module('angularDragdropApp').controller('DemoController', function ($scope, productFactory){
//  $scope.images = [1, 2, 3, 4, 5, 6, 7, 8];
//
//  $scope.loadMore = function() {
//    var last = $scope.images[$scope.images.length - 1];
//    for(var i = 1; i <= 8; i++) {
//      $scope.images.push(last + i);
//    }
//  };
//});

//$scope.productList = $scope.fetchOrderedProductStylesInCurrentAssortment();
//console.log($scope.productList);
//pager = Paginator.create($scope.productList);
//console.log(pager.page(1));