//=================================================
//              JavaScript шаблоны
//
// терминалогия
// функция обратного вызова
// самоопределяемые функции
// Немедленно вызываемые функции
// Замыкание
// Мемоизация
// Карирование
//=================================================

//============ Терминалогия ============
// Функция - это объект.
// 1. Могут создаваться динамически во время выполнения.
//    редко, но можно: var add= new Function ('x', 'y', 'return x + y');
// 2. Могут присваиваться переменным.
// 3. Могут быть параметрами для других функций.
// 4. Могут иметь собственные свойства и методы.

//именованная функция-выражение
var add = function add(a,b) {
  return a + b;
};

//функция-выражение или анонимная функция
var add = function (a,b) {
  return a + b;
};

//функция-объявление
function add(a,b) {
  return a + b;
}

// Область видимости:
// 1. Локальная
// 2. Глобальная (window)
//В JS нет блочной области видимости, которая задается операторными скобками {и}

//Подъем переменных (очень плохая практика)
//variable hoisting - переменная определяется позже, чем становится доступной.
//__________________________________________
// Хороший пример!!! (механика выполнения функции/область видимости)
//function hoisting / подъем функции
function myFunction() {
  boo();
  bar();
}
myFunction(); //если мы запускаем тут, то интерпретатор еще не знает что
//bar - это функция.

function boo() {
  console.log('start: func boo');
}
var bar = function ( ) {
  console.log('start: func bar');
};
myFunction(); //если мы запускаем тут, то интерпретатор уже знает что
//bar - это функция.



// патерн Фабрика
function Control() {}
Control.prototype.render = function (type) {
  console.log('work method: render');
};
Control.prototype.create = function (type) {
  var ctor = type,
      newControl;
  if (typeof Control(ctor) !== 'function') {
    throw {
      // name = 'Error',
      message: 'Constructor ' + ctor + ' not found.'
    };
  }
  if (typeof Control(ctor).prototype.render !== 'function') {
    Control(ctor).prototype = new Control();
  }
  newControl = new Control(ctor)();
  return newControl;
};
Control.Button = function () {
  this.name = 'Button';
  this.control = 'button';
};
Control.TextBox = function () {
  this.name = 'TextBox';
  this.control = 'TextBox';
};

var button1 = Control.create('Button');
button1.render();
