'use strict';

angular.module('angularDragdropApp')
    .service('whiteboardLayout', function () {

     var storageKey = function (assortmentId) {
       return "whiteboard-layout-" + assortmentId;
      }

      // Public API here
      return {
        'get': function (assortmentId) {
          var found = localStorage.getItem(storageKey(assortmentId));
          if (!(found === null || found === undefined)) {
            return JSON.parse(found);
          } else {
            return {};
          }
        },
        'save': function (assortmentId, layout) {
          localStorage.setItem(storageKey(assortmentId), JSON.stringify(layout));
        },
        'remove': function (assortmentId) {
          localStorage.removeItem(storageKey(assortmentId));
        }
      };
    });