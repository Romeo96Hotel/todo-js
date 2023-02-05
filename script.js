function getText(textField) {
  return textField.value;
}

function createElement(tag) {
  return document.createElement(tag);
}

const addText = (text) => {
  return (createElement("div").innerHtml = text);
};

function appendElement(element, container) {
  container.append(element, button, breakLine);
}

const textField = document.querySelector("#input-text-field");
const inputButton = document.querySelector("#input-button");
const container = document.querySelector("#ul-container");

inputButton.addEventListener("click", () => {
  appendElement(addText(getText(textField)), container);
  appendElement("button");
});
