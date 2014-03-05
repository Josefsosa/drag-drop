angular.module('angularDragdropApp').factory('productFactory', function () {

  var ShoeTotals = 10000;
  var ShoelistItems = [];

  for(var i = 0; i < ShoeTotals ;i++){
    var title = 'Item ' + i;
    var image = 'http://img.eetoolset.com/img?set=image[1011/741331.JPG],size[100x100],qual[80]&call=url[file:std.image]';
    var style = 'Chuka low'

    ShoelistItems.push({ 'title': title, 'style': style, 'image': image});
  }

  var factory = {};
  factory.getItems = function () {
    return ShoelistItems;
  };
  factory.postItems = function (ShoelistItems) {

  };

  return factory;
});

