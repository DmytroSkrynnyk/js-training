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
App.js_developer = new App.Developer('Antony', 37, 'JavaScript');
App.css_developer = new App.Developer('Ivan', 34, 'CSS');
App.order = new App.Order('JavaScript', 20);


//===== загадка =====
// ______________________________________________________________
App.check = function (developer) {
  // this.veryfy.apply(order, order.Software);
};
// var check = false;
// ______________________________________________________________


//===== Если у сотрудника есть необходимый скилл, то выполняем заказ =====
if (App.check) {
  console.log(App.order.createApp(App.order.allTime));
} else {
  console.log('Sorry, We can not this work');
}

console.log(App);
