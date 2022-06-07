"use strict";

const appData = {
  title: "",
  screens: "",
  screenPrice: 0,
  adaptive: true,
  service1: "",
  service2: "",
  rollback: 0,
  allServicePrices: 0,
  fullPrice: 0,
  servicePercentPrice: 0,
  isNumber: function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
  },

  logger: function () {
    for (let key in appData) {
      console.log(key);
    }
  },

  asking: function () {
    appData.title = prompt("Как называется ваш проект?", "spaceX");
    appData.screens = prompt(
      "Какие типы экранов нужно разработать?",
      "Простые, Сложные, Интерактивные"
    );
    do {
      appData.screenPrice = prompt(
        "Сколько будет стоить данная работа?",
        "12000"
      );
    } while (!appData.isNumber(appData.screenPrice));

    appData.adaptive = confirm("Нужен ли адаптив на сайте?");
    appData.allServicePrices = appData.getAllServicePrices();
    appData.fullPrice = appData.getFullPrice();
    appData.servicePercentPrice = appData.getServicePercentPrice();
  },

  getRollbackMessage: function (price) {
    if (price > 30000) {
      return "Даем скидку в 10%";
    } else if (15000 < price && price <= 30000) {
      return "Даем скидку в 5%";
    } else if (0 <= price && price <= 15000) {
      return "Скидка не предусмотрена";
    } else {
      return "Что-то пошло не так";
    }
  },

  getAllServicePrices: function () {
    let sum = 0;
    let num1, num2;
    for (let i = 0; i < 2; i++) {
      if (i === 0) {
        appData.service1 = prompt("Какой дополнительный тип услуги нужен?");
        do {
          num1 = prompt("Сколько это будет стоить?");
        } while (!isNumber(num1));
      } else if (i === 1) {
        appData.service2 = prompt("Какой дополнительный тип услуги нужен?");
        do {
          num2 = prompt("Сколько это будет стоить?");
        } while (!isNumber(num2));
      }
    }
    sum = +num1.trim() + +num2.trim();
    return sum;
  },

  getFullPrice: function (screenPrice, allServicePrices) {
    return screenPrice + allServicePrices;
  },

  getTitle: function (str) {
    let low = str.trim().toLowerCase();
    let upp = low.charAt(0).toUpperCase() + low.slice(1);
    return upp;
  },

  getServicePercentPrices: function (fullPrice, rollback) {
    return fullPrice - rollback;
  },

  start: function () {
    appData.asking();
    appData.allServicePrices = appData.getAllServicePrices();
    appData.fullPrice = appData.getFullPrice(
      +appData.screenPrice.trim(),
      appData.allServicePrices
    );
    appData.rollback = appData.fullPrice * (20 / 100);
    appData.servicePercentPrice = Math.ceil(
      appData.getServicePercentPrices(appData.fullPrice, appData.rollback)
    );
    appData.title = appData.getTitle(appData.title);
    appData.logger();
  },
};

appData.start();
