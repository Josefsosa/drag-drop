angular.module('angularDragdropApp').factory('shoeFactory', function () {
  var shoes = [
    { 'title': 'Item 1', style: {left: 0, top: 0}, 'drag': true, 'image': 'http://img.eetoolset.com/img?set=image[1011/741331.JPG],size[100x100],qual[80]&call=url[file:std.image]'},
    { 'title': 'Item 1', style: {left: 0, top: 0}, 'drag': true, 'image': 'http://img.eetoolset.com/img?set=image[1011/741331.JPG],size[350x350],qual[80]&call=url[file:std.image]'},
    { 'title': 'Item 2', style: {left: 0, top: 0}, 'drag': true, 'image': 'http://img.eetoolset.com/img?set=image[1011/1021664.JPG],size[350x350],qual[80]&call=url[file:std.image]'},
    { 'title': 'Item 3', style: {left: 0, top: 0}, 'drag': true, 'image': 'http://img.eetoolset.com/img?set=image[1011/953690.JPG],size[350x350],qual[80]&call=url[file:std.image]'},
    { 'title': 'Item 10', style: {left: 0, top: 0}, 'drag': true, 'image':  'http://img.eetoolset.com/img?set=image[1011/741331.JPG],size[350x350],qual[80]&call=url[file:std.image]'}
  ];

  var factory = {};
  factory.getShoes = function () {
    return shoes;
  };
  factory.postShoes = function (shoes) {
  };

  return factory;
});
