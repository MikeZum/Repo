"use strict";

const title = document.getElementsByTagName("h1")[0];
const buttonPlus = document.querySelector(".screen-btn");
const otherItemPercent = document.querySelectorAll(".percent");
const otherItemNumber = document.querySelectorAll(".number");
const checkBox = document.querySelectorAll(".custom-checkbox");

const inputRange = document.querySelector(".rollback input");
const inputRangeValue = document.querySelector(".rollback .range-value");

const startBtn = document.getElementsByClassName("handler_btn")[0];
const resetBtn = document.getElementsByClassName("handler_btn")[1];

const total = document.getElementsByClassName("total-input")[0];
const totalCount = document.getElementsByClassName("total-input")[1];
const totalCountOther = document.getElementsByClassName("total-input")[2];
const fullTotalCount = document.getElementsByClassName("total-input")[3];
const totalCountRollback = document.getElementsByClassName("total-input")[4];

let screens = document.querySelectorAll(".screen");
let selectItems = document.querySelectorAll("select");
let screensInput = document.querySelectorAll('.screen input[type="text"]');

const appData = {
  title: "",
  screens: [],
  screensCount: 0,
  screenPrice: 0,
  servicesPercent: {},
  servicesNumber: {},
  servicePricesPercent: 0,
  servicePricesNumber: 0,
  fullPrice: 0,
  rollback: 0,
  servicePercentPrice: 0,
  isError: false,
  init: function () {
    this.addTitle();
    this.rollbackInput();

    startBtn.addEventListener("click", () => {
      this.isError = false;
      this.verification();
    });
    resetBtn.addEventListener("click", () => {
      this.reset();
    });
    buttonPlus.addEventListener("click", this.addScreenBlock);
  },

  addTitle: function () {
    document.title = title.textContent;
  },

  verification: function () {
    screens.forEach((screen) => {
      const select = screen.querySelector("select");
      const input = screen.querySelector("input");
      if (select.value === "" || input.value === "") {
        this.isError = true;
      }
    });

    if (!this.isError) {
      this.start();
    } else {
      alert("Введите тип и количество экранов!");
      return;
    }
  },

  start: function () {
    this.disable();
    this.addScreens();
    this.addServices();
    this.addPrices();
    // this.getServicePercentPrices();
    // this.logger();
    this.showResult();
  },

  disable: function () {
    selectItems = document.querySelectorAll("select");
    screensInput = document.querySelectorAll('.screen input[type="text"]');

    this.lockToggle(checkBox);
    this.lockToggle(selectItems);
    this.lockToggle(screensInput);

    buttonPlus.style.display = "none";
    startBtn.style.display = "none";
    resetBtn.style.display = "inline-block";
  },

  lockToggle: function (elem) {
    if (elem.length > 1) {
      elem.forEach((item) => {
        item.disabled = !item.disabled;
      });
    } else {
      elem[0].disabled = !elem[0].disabled;
    }
  },

  reset: function () {
    selectItems = document.querySelectorAll("select");
    screensInput = document.querySelectorAll('.screen input[type="text"]');

    while (screens.length > 1) {
      screens[screens.length - 1].remove();
      screens = document.querySelectorAll(".screen");
    }

    checkBox.forEach((elem) => {
      if (elem.checked) {
        elem.checked = !elem.checked;
      }
    });

    buttonPlus.style.display = "inline-block";
    startBtn.style.display = "inline-block";
    resetBtn.style.display = "none";
    screensInput[0].value = "";
    selectItems[0].value = "";

    this.lockToggle(checkBox);
    this.lockToggle(selectItems);
    this.lockToggle(screensInput);
    this.clear();
  },

  clear: function () {
    this.screens = [];
    this.screensCount = 0;
    this.screenPrice = 0;
    this.servicesPercent = {};
    this.servicesNumber = {};
    this.servicePricesPercent = 0;
    this.servicePricesNumber = 0;
    this.fullPrice = 0;
    this.rollback = 0;
    this.servicePercentPrice = 0;
    this.showResult();
  },

  rollbackInput: function () {
    inputRange.addEventListener("input", () => {
      inputRangeValue.textContent = inputRange.value + "%";
      this.rollback = inputRange.value;
      this.servicePercentPrice = Math.ceil(
        this.fullPrice - this.fullPrice * (this.rollback / 100)
      );
      this.showResult();
    });
  },

  showResult: function () {
    total.value = this.screenPrice;
    totalCount.value = this.screensCount;
    totalCountOther.value =
      this.servicePricesPercent + this.servicePricesNumber;
    fullTotalCount.value = this.fullPrice;
    totalCountRollback.value = this.servicePercentPrice;
  },

  addScreens: function () {
    screens = document.querySelectorAll(".screen");

    screens.forEach((screen, index) => {
      const select = screen.querySelector("select");
      const input = screen.querySelector("input");
      const selectName = select.options[select.selectedIndex].textContent;
      const count = input.value;

      this.screens.push({
        id: index,
        name: selectName,
        price: +select.value * +input.value,
        count: count,
      });
    });
  },

  addServices: function () {
    otherItemPercent.forEach((item) => {
      const verification = item.querySelector("input[type=checkbox]");
      const label = item.querySelector("label");
      const input = item.querySelector("input[type=text]");

      if (verification.checked) {
        this.servicesPercent[label.textContent] = +input.value;
      }
    });

    otherItemNumber.forEach((item) => {
      const verification = item.querySelector("input[type=checkbox]");
      const label = item.querySelector("label");
      const input = item.querySelector("input[type=text]");

      if (verification.checked) {
        this.servicesNumber[label.textContent] = +input.value;
      }
    });
  },

  addScreenBlock: function () {
    screens = document.querySelectorAll(".screen");
    const cloneScreen = screens[0].cloneNode(true);

    screens[screens.length - 1].after(cloneScreen);
  },

  addPrices: function () {
    this.screenPrice = this.screens
      .map((item) => item.price)
      .reduce((prev, curr) => prev + curr, 0);
    this.screensCount = this.screens
      .map((item) => item.count)
      .reduce((prev, curr) => +prev + +curr);

    for (let key in this.servicesNumber) {
      this.servicePricesNumber += this.servicesNumber[key];
    }

    for (let key in this.servicesPercent) {
      this.servicePricesPercent +=
        this.screenPrice * (this.servicesPercent[key] / 100);
    }

    this.fullPrice =
      this.screenPrice + this.servicePricesNumber + this.servicePricesPercent;
    this.servicePercentPrice = Math.ceil(
      this.fullPrice - this.fullPrice * (this.rollback / 100)
    );
  },

  logger: function () {
    console.log(appData.fullPrice);
    console.log(appData.servicePercentPrice);
  },
};

appData.init();
