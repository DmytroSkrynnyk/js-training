var obj = {
  name: 'Сундук',
  test: function () {
    console.log('test');
  }
}
var Foo = function () {
  this.name = 'Фуу';
};
var boo = new Foo();
console.log(boo.__proto__);

Foo.prototype = obj;
var boo2 = new Foo();
var boo3 = new Foo();
console.log(boo3);
