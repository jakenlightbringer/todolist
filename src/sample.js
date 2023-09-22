function todoList() {
    const projectContainer = document.getElementById("project-container");
    const projectTodos = {};
    let currentProject = null;
    
  
    const toDoContainer = document.createElement('div');
    toDoContainer.id = 'todo-container'
  
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

        projectTodos[currentProject].push(toDoItem.innerText);
        

        const arrayTest = document.createElement('div');
        arrayTest.innerHTML = todoArray;
        
  
        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = 'Delete';
        deleteButton.addEventListener('click', () => {
          toDoContainer.removeChild(toDoItem);
          projectTodos[currentProject] = projectTodos[currentProject].filter(item => item !== todoList.innerHTML);
        });
  
        toDoItem.appendChild(deleteButton);
        toDoContainer.appendChild(toDoItem);
        
        
       
  
        
        toDoInput.value = '';
      }
    });
  
   
    toDoContainer.appendChild(toDoInput);
    toDoContainer.appendChild(addToDoButton);
  
    
    projectContainer.appendChild(toDoContainer);





  }
  
  export default todoList;
  