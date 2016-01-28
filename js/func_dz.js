//===== Вызов конструктора в качестве метода =====
var App = {
  Developer: function (name, age, skill) {
    if (!(this instanceof App.Developer)) {
      return new App.Developer(name, age, skill);
    }
    this.name = name;
    this.age = age;
    this.skill = skill;
  },
  Order: function (software, allTime) {
    if (!(this instanceof App.Order)) {
      return new App.Order(software, allTime);
    }
    this.software = software;
    this.allTime = allTime;
  }
};

//===== Добавляю метод =====
App.Order.prototype.createApp = function (time) {
  var workHoursPerDays = 4;
  var complyteWork = time / workHoursPerDays;
    return 'Developer finish this order: ' + complyteWork + ' days';
};

//===== Создаю сотрудников и Заказ =====
var  js_developer = new App.Developer('Antony', 37, 'JavaScript');
var css_developer = new App.Developer('Ivan', 34, 'CSS');
var order = new App.Order('JavaScript', 20);


//===== загадка =====
// ______________________________________________________________
var check = function (developer) {
  // this.veryfy.apply(order, order.Software);
};
// var check = false;
// ______________________________________________________________


//===== Если у сотрудника есть необходимый скилл, то выполняем заказ =====
if (check) {
  console.log(order.createApp(order.allTime));
} else {
  console.log('Sorry, We can not this work');
}
