//=================================================
//     Шаблоны вызова функции (4 шаблона)
//=================================================

//============ Шаблон1: Простой вызов ============
var func = function (a,b) {
  console.log(this);
  return a + b;
};

//============ Шаблон2: Вызов методом ============
// функция, которая является свойством объекта - называются Методом
//методы бывают: открытые(публичные) и закрытые(приватные)
var obj = {
  myfunc: function (a,b) {
    console.log(this);
    return a + b;
  }
};

// Для того, чтобы в одном Объекте использовать публичные и приватные
// методы, нужно использовать патерн модульности. Который является
// базовым патерном в объектно-ориентированной разработке на JS
var obj = (function () {
  var methodPrivat = function () {
    return 'privat method';
  };
  return { //всё что возвратит ретурн = публичные методы...
    method1: function (a,b) { //публичный метод
      return a + b;
    },
    method2: methodPrivat  //еще один публичный метод, который
                           //может добраться к приватному методу
    };
})();

//============ Шаблон3: вызов метода Apply ============
// можем взаимодействовать с контекстом других объектов/функциф
var arr = [7,8];
var add = function (a,b) {
  console.log(this);
  return a + b;
};
var summ = add.apply(null, arr); //null - глобальный контекст (window)
console.log(summ);
var summ2 = add.apply(obj, arr); //obj - локальный контекст (obj)
console.log(summ2);

//============ Шаблон4: вызов конструктора ============
var Man = function (name) {
  this.name = name;
  this.canSpeak = true;
  this.say = function () {
    console.log('Hello, my name is ' + this.name + '.');
  };
};
var manager = new Man('Anton');
var developer = new Man('Xoma');

console.log(manager);
console.log(developer);
console.log(manager.say());
//Есть два спосабо добавить в конструктор методы:
//разница межну ними в производительности и доступности к приватным переменным
// 1.Создать методы внутри конструктора
// 2. через prototype (нет доступа к приватным переменным)
Man.prototype.newSay = function () {
  return 'Hello, im new method from Constructor';
};
console.log(manager.newSay());

// мы так же можем создать конструктор внутри объекта
//этот способ самы используемый и правильный
var App = {
  SuperMan: function (name) {
    console.log(this);
    this.name = name;
  }
};
var admin = new App.SuperMan('CyMpak');
App.SuperMan.prototype.superJamp = function () {
  return 'super jamping';
};
console.log(admin);
console.log(admin.superJamp());
