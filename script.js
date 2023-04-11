'use strict';

let todo = (() => {

  let todoList = [];

  const controller = {
    init() {
      view.init();
    },

    onAppendButtonClicked() {
      const text = view.getText();

      // If the text is empty, don't add it to the list of todo's and exit.
      if(text.length === 0) return;

      let todoItem = {
        text: text,
        completed: false
      };

      todoList.push(todoItem);

      view.update();
    },

    getItems() {
      return todoList;
    },

    onCompleteButtonClicked() {
      const i = parseInt(this.dataset.index);

      // Toggle the 'completed' property of the corresponding todo item
      todoList[i].completed = !todoList[i].completed;

      view.update();
    },

    onDeleteButtonClicked() {
      // Filter out the todo item with the corresponding index
      todoList = todoList.filter((val, i) => {
        if(i !== parseInt(this.dataset.index)) return val
      });
      
      view.update();
    }
  };

  const view = {
    // This method initializes the view by getting references to the text field, append button, and todo list
    init() {
      view.$textField = document.querySelector('#input-text-field');
      view.$appendButton = document.querySelector('#append-button');
      view.$appendButton.addEventListener('click', controller.onAppendButtonClicked);
      view.$todoList = document.querySelector('#todo-list');
    },

    getText() {
      return view.$textField.value;
    },

    // This method updates the view by clearing the text field and todo list, and then adding each todo item to the list
    update() {
      view.$textField.value = '';
      view.$todoList.innerHTML = '';

      // Loop through each todo item and create a list item with complete and delete buttons
      controller.getItems().forEach((todoItem, i) => {
        
        let $completeButton = document.createElement('button');
        $completeButton.innerText = 'completed';
        $completeButton.dataset.index = i;
        $completeButton.addEventListener('click', controller.onCompleteButtonClicked);
        
        let $deleteButton = document.createElement('button');
        $deleteButton.innerText = 'delete';
        $deleteButton.dataset.index = i;
        $deleteButton.addEventListener('click', controller.onDeleteButtonClicked);
        
        let $listItem = document.createElement('li');
        $listItem.innerText = todoItem.text;
        $listItem.dataset.completed = todoItem.completed;

        $listItem.appendChild($completeButton);
        $listItem.appendChild($deleteButton);
        view.$todoList.appendChild($listItem);
      });
    }
  };

  return {
    items: controller.getItems,
    init: controller.init
  }

})()

todo.init();

