//lesson01
let title = "mySales";
let screens = "myScreens";
let screenPrice = 1000;
let rollback = 20;
let fullPrice = 5000;
let adaptive = "myAdaptive";

alert("Hi!");

console.log("myFirstMessege");

// lesson02
let title = "project";
let screens = "Простые, Сложные, Интерактивные";
let screenPrice = 1000;
let rollback = 20;
let fullPrice = 500000;
let adaptive = true;
("use strict");

let title = prompt("Как называется ваш проект?");
console.log(title);

let screens = prompt(
  "Какие типы экранов нужно разработать?",
  "Простые, Сложные, Интерактивные"
);
console.log(screens);

let screenPrice = +prompt("Сколько будет стоить данная работа?", "12000");
console.log(screenPrice);

console.log(screens.toLowerCase());
console.log(screens.split(", "));

// lesson03
let adaptive = prompt("Нужен ли адаптив на сайте?");
console.log(Boolean(adaptive));

let service1 = prompt("Какой дополнительный тип услуги нужен?");
console.log(service1);

let servicePrice1 = +prompt("Сколько это будет стоить?");
console.log(servicePrice1);

let service2 = prompt("Какой дополнительный тип услуги нужен?");
console.log(service2);

let servicePrice2 = +prompt("Сколько это будет стоить?");
console.log(servicePrice2);

let fullPrice = screenPrice + servicePrice1 + servicePrice2;
console.log(fullPrice + " fullPrice");

let RollbackToIntermediary = Math.ceil(999);
let servicePercentPrice = fullPrice - RollbackToIntermediary;

if (fullPrice > 30000) {
  console.log("Даем скидку в 10%");
} else if (fullPrice > 15000 && fullPrice < 30000) {
  console.log("Даем скидку в 5%");
} else if (fullPrice < 15000 && fullPrice > 0) {
  console.log("Скидка не предусмотрена");
} else if (fullPrice < 0) {
  console.log("Что то пошло не так");
}

switch (fullPrice) {
  case 1:
    console.log("1");
    break;
  case 3000:
    console.log(
      "Реальная цена, если servicePrice1 = 1000 и servicePrice2 = 1000"
    );
    break;
  case 0:
  case 15000:
  case 30000:
    console.log("все варианты");
    break;
  default:
    break;
}
