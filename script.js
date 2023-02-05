const getText = function () {
    const textBox = document.querySelector("input").value;
    return textBox;
  };
  
  const appendText = function (text) {
    const todoList = document.querySelector("#ul-container");
    todoList.appendChild(text);
  };
  
  const click = document
    .querySelector("#text-button")
    .addEventListener("click", () => {
      console.log(getText.textBox);
    });
  