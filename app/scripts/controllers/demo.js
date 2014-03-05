angular.module('angularDragdropApp').controller('DemoCtrl', function ($rootScope, $scope, $timeout) {
  var
      DATA_SIZE = 10000,
      WINDOW_SIZE = 20,
      offset = 0;

  var getData = function () {
    var
        i,
        data = [];

    for (i = 0; i < DATA_SIZE; i++) {
      data[i] = {};
      data[i].description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus congue elit quis convallis tempus. " + i;
      data[i].value = i;
    }
    console.log(data);
    return data;
  }

  var cachedData = getData();

  $scope.getWindowSize = function () {
    return WINDOW_SIZE;
  }

  $scope.getOffset = function () {
    return offset;
  }

  $scope.computeTotal = function () {
    var sum = 0;
    angular.forEach(cachedData, function (datum) {
      sum += datum.value;
    });

    return sum;
  }

  var loadData = function (deltaY) {
    var
        i,
        start,
        end,
        data = [];

    if ($scope.cachedMode) {

      start = offset - (WINDOW_SIZE * 0.25) * deltaY;
      if (start < 0) {
        start = 0;
      }

      end = start + WINDOW_SIZE;
      if (end >= (cachedData.length - WINDOW_SIZE - 1)) {
        end = cachedData.length - WINDOW_SIZE - 1;
      }

      for (i = 0; i < (end - start); i++) {
        data[i] = cachedData[start + i];
      }

      offset = start;
    } else {
      data = cachedData;
      offset = 0;
    }

    return data;
  }

  $scope.scroll = function (deltaY) {
    $scope.data = loadData(deltaY);
  };

  $scope.reload = function () {
    offset = 0;
    $scope.data = loadData(0);
  }

  $rootScope.activeItem = "people";
  $scope.scrollingTime = 0;
  $scope.cachedMode = true;

//  angular.forEach($scope.list2, function(val, key) {
//    $scope.list1.push({});
//  });

});

angular.module('angularDragdropApp').directive('postRepeatTimer',
    ['$timeout', '$log',
      function($timeout, $log) {
        var start, end;
        var reStart = false;
        return function(scope, element, attrs) {
          if (scope.$first || reStart) {
            start = new Date();
            reStart = false;
          } else if (scope.$last){
            scope.$parent.scrollingTime = (new Date()) - start;
            reStart = true;
          }
        };
      }
    ]);
