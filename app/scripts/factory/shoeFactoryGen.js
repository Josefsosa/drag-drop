angular.module('angularDragdropApp').factory('shoeFactoryGen', function () {

  var ShoeTotals = 10;
  var ShoelistItems = [];

  for(var i = 0; i < ShoeTotals ;i++){
    var title = 'Item' + i;
    var image = 'http://img.eetoolset.com/img?set=image[1011/741331.JPG],size[100x100],qual[80]&call=url[file:std.image]';
    var style = 'style: {left: 0, top: 0}'

    ShoelistItems.push({ 'title': title, 'style': style, 'drag': true, 'image': image});
  }

  var factory = {};
  factory.getShoes = function () {
    return ShoelistItems;
  };
  factory.postShoes = function (ShoelistItems) {

  };

  return factory;
});

