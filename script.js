/* 
User types in text to append
Presses button
returns div with remove button
 */
const textField = document.querySelector("#input-text-field");
const container = document.getElementById("ul-container");
const appendButton = document.getElementById("input-button");

const todo = (function (container, text, button) {
  /* function initilization */
  function init() {
    button.addEventListener("click", () => {
      container.appendChild(createDiv);
    });
  }

  /* helper functions */
  const createDiv = document.createElement("div");

  const createParagraph = document.createElement("p");

  const createRemoveButton = document.createElement("button");

  const createSpan = document.createElement("span");
  S;

  const getText = text.value;

  const listElement = function () {};

  /* Returns automatically */
  return {
    name: "todo",
    init: init(),
  };
})(container, textField, appendButton);
