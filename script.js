const TODO = {
  init: function(button) {
    document.addEventListener("DOMContentLoaded", () => button.onClick);
  },

  onClick: () => {
    return button.addEventListener("click", TODO.getText);
  },

  getText: function(text) {
    return text.value;
  },

  createElement: function() {
    document.createElement("div");
  },

  addText: function() {
    return (TODO.createElement.append("span").textContent = TODO.getText);
  },

  finalEl: (container) => {
    container.appendChild(
      
    )
  },

  appendElement: function (container) {
    container.appendChild((TODO.addText.innerHtml = text));
  },
};

const textField = document.querySelector("#input-text-field");
const inputButton = document.querySelector("#input-button");
const container = document.querySelector("#ul-container");

TODO.init(inputButton);
TODO.get;
