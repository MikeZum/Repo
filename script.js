"use strict";

let title = getTitle(prompt("Как называется ваш проект?", "spaceX"));
let screens = prompt(
  "Какие типы экранов нужно разработать?",
  "Простые, Сложные, Интерактивные"
);
let screenPrice = +prompt("Сколько будет стоить данная работа?", "12000");
let adaptive = confirm("Нужен ли адаптив на сайте?");
let service1 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice1 = +prompt("Сколько это будет стоить?", "1000");
let service2 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice2 = +prompt("Сколько это будет стоить?", "1000");

let showTypeOf = function (variable) {
  console.log(variable, typeof variable);
};

const getRollbackMessage = function (price) {
  if (price > 30000) {
    return "Даем скидку в 10%";
  } else if (15000 < price && price <= 30000) {
    return "Даем скидку в 5%";
  } else if (0 <= price && price <= 15000) {
    return "Скидка не предусмотрена";
  } else {
    return "Что-то пошло не так";
  }
};

let getAllServicePrices = function () {
  return servicePrice1 + servicePrice2;
};

function getFullPrice() {
  return screenPrice + allServicePrices;
}

function getTitle(str) {
  let low = str.trim().toLowerCase();
  let upp = low.charAt(0).toUpperCase() + low.slice(1);
  return upp;
}

let getServicePercentPrices = function () {
  return fullPrice - rollback;
};

let allServicePrices = getAllServicePrices();
let fullPrice = getFullPrice();
let rollback = fullPrice * (20 / 100);
let servicePercentPrice = Math.ceil(getServicePercentPrices());

showTypeOf(title);
showTypeOf(fullPrice);
showTypeOf(adaptive);

console.log(screens.toLowerCase().split(", "));
console.log(getRollbackMessage(fullPrice));
console.log(servicePercentPrice, "итоговая стоимость минус сумма отката");
