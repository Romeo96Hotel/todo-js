const TODO = {
  init: function (button) {
    document.addEventListener("DOMContentLoaded", () => button.onClick);
  },

  onClick: function () {
    return button.addEventListener("click", TODO.appendElement);
  },

  getText: function (text) {
    return text.value;
  },

  createElement: function () {
    return document.createElement("div");
  },

  addText: function () {
    return (TODO.createElement.append("span").textContent = TODO.getText);
  },

  finalEl: function () {
    const newDiv = TODO.createElement();
    const divWithText = newDiv.append(TODO.addText);
    return divWithText;
  },

  appendElement: function (container) {
    container.appendChild(TODO.finalEl);
  },
};

const textField = document.querySelector("#input-text-field");
const inputButton = document.querySelector("#input-button");
const container = document.querySelector("#ul-container");

TODO.init(inputButton);
