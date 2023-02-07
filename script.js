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
    });
  }

  /* helper functions */

  function addListElement() {
    const div = document.createElement("div");
    const paragraph = document.createElement("p");
    const removeButton = document.createElement("button");
    const getText = document.createTextNode(text.value);

    container.appendChild(div);
  }

  /* Returns automatically */
  return {
    name: "todo",
    init: init(),
  };
})(container, textField, appendButton);
