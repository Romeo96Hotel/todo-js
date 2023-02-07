/* 
User types in text to append
Presses button
returns div with text + remove button
 */
const textField = document.querySelector("#input-text-field");
const container = document.getElementById("ul-container");
const appendButton = document.getElementById("input-button");

const todo = (function (container, text, button) {
  /* function initilization */
  function init() {
    button.addEventListener("click", () => {
      addListElement();
      addDelButton();
    });
  }

  /* helper functions */

  function addListElement() {
    const textNode = document.createElement("h3");

    textNode.textContent = text.value;
    container.appendChild(textNode);
  }

  function addDelButton() {
    const delButton = document.createElement("button");
    container.append(delButton);
  }

  /* Returns automatically */
  return {
    name: "todo",
    init: init(),
  };
})(container, textField, appendButton);
