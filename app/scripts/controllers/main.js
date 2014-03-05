'use strict';

angular.module('angularDragdropApp').controller('MainCtrl', function ($scope, shoeFactory,  shoeFactoryGen){
  $scope.list1 = [];
  $scope.list2 = [];

  $scope.name   = "Conductive Select";

  function init() {
    $scope.list1 = shoeFactory.getShoes();
    //$scope.customerx = customer.name;
  }

  init();

  $scope.optionsStyle = function(style){
    var ret= {
      position: 'absolute',
      left: style.left+'px',
      top: (style.top)+'px'
    }
    return ret;
  }
  $scope.drop= function(event, ui) {
    console.log('dropped: '+ui.offset.left+ ","+(ui.offset.top));

  }
  $scope.stopped= function(event, ui){
    $scope.currentDragItem= this.item;
    console.log('stop: '+ui.offset.left+ ","+(ui.offset.top));
    this.item.style.left= ui.offset.left;
    this.item.style.top= (ui.offset.top);
  }
  $scope.stop= function(event, ui) {
    this.item.style.left= ui.offset.left;
    this.item.style.top= (ui.offset.top);//{'left':'ui.position.left+px', 'y': 'ui.position.top+px'};
    console.log("stopped "+ (this.item.style.left)+","+(this.item.style.top));
  }

});