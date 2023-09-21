function todoList() {
    const projectContainer = document.getElementById("project-container");
  
    const toDoContainer = document.createElement('div');
  
    const toDoInput = document.createElement('input');
    toDoInput.type = 'text';
    toDoInput.id = 'todo-input';
    toDoInput.placeholder = 'Add New Task...';
  
    const addToDoButton = document.createElement('button');
    addToDoButton.innerHTML = 'Add Item!';
  
    addToDoButton.addEventListener('click', () => {
      const toDoText = toDoInput.value.trim();
  
      if (toDoText !== '') {
        const toDoItem = document.createElement('li');
        toDoItem.innerHTML = toDoText;
  
        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = 'Delete';
        deleteButton.addEventListener('click', () => {
          toDoContainer.removeChild(toDoItem);
        });
  
        toDoItem.appendChild(deleteButton);
        toDoContainer.appendChild(toDoItem);
  
        // Clear the input field
        toDoInput.value = '';
      }
    });
  
    // Append input and button to the todo container
    toDoContainer.appendChild(toDoInput);
    toDoContainer.appendChild(addToDoButton);
  
    // Append the todo container to the project container
    projectContainer.appendChild(toDoContainer);
  }
  
  export default todoList;
  