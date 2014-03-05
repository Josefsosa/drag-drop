'use strict';
var app = angular.module('angularDragdropApp', []).controller('MainCtrl', function($scope) {
  $scope.pages = 15;
  $scope.current = 1;
}).directive('LineSheetPager', function($timeout) {
      return {
        restrict: 'C',
        replace: true,
        scope: {
          pages: '@paginatePages',
          currentPage: '='
        },
        template: '<div class="pagination-holder dark-theme">' + '</div>',
        controller: function($scope, $element, $attrs) {
          var halfDisplayed = 1.5,
              displayedPages = 3,
              edges = 2;
          $scope.getInterval = function() {
            return {
              start: Math.ceil($scope.currentPage > halfDisplayed ? Math.max(Math.min($scope.currentPage - halfDisplayed, ($scope.pages - displayedPages)), 0) : 0),
              end: Math.ceil($scope.currentPage > halfDisplayed ? Math.min($scope.currentPage + halfDisplayed, $scope.pages) : Math.min(displayedPages, $scope.pages))
            };
          }
          $scope.selectPage = function(pageIndex) {
            $scope.currentPage = pageIndex;
            $scope.draw();
          }
          $scope.appendItem = function(pageIndex, opts) {
            var options, link;

            pageIndex = pageIndex < 0 ? 0 : (pageIndex < $scope.pages ? pageIndex : $scope.pages - 1);

            options = $.extend({
              text: pageIndex + 1,
              classes: ''
            }, opts || {});

            if (pageIndex == $scope.currentPage) {
              link = $('<span class="current">' + (options.text) + '</span>');
            } else {
              link = $('<a href="javascript:void(0)" class="page-link">' + (options.text) + '</a>');
              link.bind('click', function() {
                $scope.selectPage(pageIndex);
              });
            }

            if (options.classes) {
              link.addClass(options.classes);
            }

            $element.append(link);
          }
          $scope.draw = function() {


            $($element).empty();
            var interval = $scope.getInterval(),
                i;

            // Generate Prev link
            if (true) {
              $scope.appendItem($scope.currentPage - 1, {
                text: 'Prev',
                classes: 'prev'
              });
            }

            // Generate start edges
            if (interval.start > 0 && edges > 0) {
              var end = Math.min(edges, interval.start);
              for (i = 0; i < end; i++) {
                $scope.appendItem(i);
              }
              if (edges < interval.start) {
                $element.append('<span class="ellipse">...</span>');
              }
            }

            // Generate interval links
            for (i = interval.start; i < interval.end; i++) {
              $scope.appendItem(i);
            }

            // Generate end edges
            if (interval.end < $scope.pages && edges > 0) {
              if ($scope.pages - edges > interval.end) {
                $element.append('<span class="ellipse">...</span>');
              }
              var begin = Math.max($scope.pages - edges, interval.end);
              for (i = begin; i < $scope.pages; i++) {
                $scope.appendItem(i);
              }
            }

            // Generate Next link
            if (true) {
              $scope.appendItem($scope.currentPage + 1, {
                text: 'Next',
                classes: 'next'
              });
            }
          }
        },
        link: function(scope, element, attrs, controller) {
          $timeout(function() {
            scope.draw();
          }, 2000);
          scope.$watch(scope.paginatePages,function(){scope.draw();})
        }

      }
    });