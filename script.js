"use strict";

const body = document.querySelector("body");
const cssText =
  "height: 100px; width: 100px; background - color: yellow; font - size: 14px;";

const DomElement = function (selector) {
  this.selector = selector;
  this.height = "100px";
  this.width = "150px";
  this.bg = "yellow";
  this.fontSize = "20px";
};

DomElement.prototype.createElement = function () {
  if (this.selector[0] == ".") {
    const addClass = this.selector.slice(1);
    const newDiv = document.createElement("div");
    newDiv.className = addClass;
    newDiv.textContent = "Div";
    newDiv.style.cssText = `height: ${this.height}; width: ${this.width}; 
        background: ${this.bg}; font-size: ${this.fontSize};`;
    document.body.append(newDiv);
  } else if (this.selector[0] == "#") {
    const addId = this.selector.slice(1);
    const newP = document.createElement("p");
    newP.id = addId;
    newP.textContent = "P";
    newP.style.cssText = `height: ${this.height}; width: ${this.width}; 
        background: ${this.bg}; font-size: ${this.fontSize};`;
    document.body.append(newP);
  }
};

const elementClass = new DomElement(".block");
const elementId = new DomElement("#best");

elementClass.createElement();
elementId.createElement();
