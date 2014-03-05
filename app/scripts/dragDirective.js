angular.module("angularDragdropApp").directive('draggable', function () {
  return {
    restrict: 'A',
    link: function (scope, element, attrs) {
      element.draggable({
        cursor: "move",
        stop: function (event, ui) {
          scope[attrs.x] = ui.position.left;
          scope[attrs.y] = ui.position.top;
          scope.$eval(attrs.movable || attrs.scrollOpts || {}),
              scroll = new iScroll(element[0], opts);
          scope.$apply();
        }
      });
    }
  };
});

angular.module('angularDragdropApp')
    .directive('hboTabs', function() {
      return {
        restrict: 'A',
        link: function(scope, elm, attrs) {
          var jqueryElm = $(elm[0]);
          $(jqueryElm).tabs()
        }
    };
});