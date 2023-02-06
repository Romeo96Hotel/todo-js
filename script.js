/* 
User types in text to append
Presses button
returns div with remove button
 */

let todo = (function () {
  const textField = document.querySelector("#input-text-field");

  /* function initilization */
  const init = function () {
    const appendButton = document.getElementById("container-button");
    appendButton.addEventListener("click", () => {
      container.appendToDiv;
    });
  };

  /* helper functions */
  const newDiv = function () {
    return (div = document.createElement("div"));
  };

  const createSpan = function () {
    return (document.createElement("span").textContent = textField);
  };

  const createRemoveButton = function () {
    container.removeChild(newDiv);
  };

  /* final result */
  const appendToDiv = function () {
    return Object.freeze(newDiv.append(createSpan, createRemoveButton));
  };

  return {
    name: "todo",
    init,
  };
})();

console.log(todo);
