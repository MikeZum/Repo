"use strict";

// let title = prompt("Как называется ваш проект?");
// let screens = prompt(
//   "Какие типы экранов нужно разработать?",
//   "Простые, Сложные, Интерактивные"
// );
// let screenPrice = +prompt("Сколько будет стоить данная работа?", "12000");
// let adaptive = prompt("Нужен ли адаптив на сайте?");
// let service1 = prompt("Какой дополнительный тип услуги нужен?");
// let servicePrice1 = +prompt("Сколько это будет стоить?");
// let service2 = prompt("Какой дополнительный тип услуги нужен?");
// let servicePrice2 = +prompt("Сколько это будет стоить?");
// let fullPrice = screenPrice + servicePrice1 + servicePrice2;
// let rollback = Math.ceil(999);
// let servicePercentPrice = fullPrice - fullPrice * (rollback / 100);

// if (fullPrice > 30000) {
//   console.log("Даем скидку в 10%");
// } else if (fullPrice > 15000 && fullPrice < 30000) {
//   console.log("Даем скидку в 5%");
// } else if (fullPrice < 15000 && fullPrice >= 0) {
//   console.log("Скидка не предусмотрена");
// } else if (fullPrice < 0) {
//   console.log("Что то пошло не так");
// }

// switch (fullPrice) {
//   case 1:
//     console.log("1");
//     break;
//   case 3000:
//     console.log(
//       "Реальная цена, если servicePrice1 = 1000 и servicePrice2 = 1000"
//     );
//     break;
//   case 0:
//   case 15000:
//   case 30000:
//     console.log("все варианты");
//     break;
//   default:
//     break;
// }

// console.log(typeof title);
// console.log(typeof fullPrice);
// console.log(typeof adaptive);
// console.log(screens.length);
// console.log("Стоимость верстки экранов" + " " + screenPrice + " " + "рублей");
// console.log("Стоимость разработки сайта" + " " + screenPrice + " " + "рублей");
// console.log(screens.toLowerCase().split(", "));
// console.log(fullPrice * (rollback / 100));
// console.log(Boolean(adaptive));
// console.log(service1);
// console.log(servicePrice1);
// console.log(service2);
// console.log(servicePrice2);
// console.log(servicePercentPrice);

// let allServicePrices;
// const getAllServicePrices = function (servicePrice1, servicePrice2) {
//   return servicePrice1 + servicePrice2;
// };

// allServicePrices = getAllServicePrices(1000, 2000);
// console.log(allServicePrices + " allServicePrices");

// //let fullPrice;
// function getFullPrice(screenPrice, allServicePrices) {
//   return screenPrice + allServicePrices;
// }

// fullPrice = getFullPrice(100, 200);
// console.log(fullPrice + " fullPrice");

// //let servicePercentPrice;
// const getServicePercentPrices = function (fullPrice, rollback) {
//   return fullPrice - rollback;
// };

// servicePercentPrice = getAllServicePrices(1000, 2000);
// console.log(servicePercentPrice + " servicePercentPrice");

function getTitle(str) {
  if (!str) return str;
  return str[0].toUpperCase() + str.slice(1);
}

console.log(getTitle("создание сайтов"));
