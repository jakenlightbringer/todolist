function popup(){
    const sideBarContainer = document.getElementById('sidebar-container');
    const popupButton = document.getElementById('new-button');
    const popupContainer = document.getElementById('add-project-popup');
    const popupForm = document.getElementById('add-project-form');
    const projectList = [];

    popupButton.addEventListener('click', () =>{
        popupContainer.style.display = 'block';
    });
    popupForm.addEventListener('submit', (e)=>{
        e.preventDefault();
        //popupContainer.style.display = 'none';
        const sideBarItem = document.createElement('li');
        const sideBarButton = document.createElement('button');
        const sideBarValue = document.getElementById('project').value;
        sideBarButton.innerHTML = sideBarValue;
        projectList.push(sideBarValue);
        

        sideBarButton.addEventListener('click', ()=>{
            const index = projectList.indexOf(sideBarValue);
            if(index !== -1){
                switchToProject(index);
            }
        });
        sideBarItem.appendChild(sideBarButton);
        sideBarContainer.appendChild(sideBarItem);
        popupForm.reset();
    });
    function switchToProject(index){
        
        const projectName = document.getElementById('current-project-name');
        

        const storedTodoItems = JSON.parse(localStorage.getItem(projectList[index])) || [];

        const todoArray = storedTodoItems;

        projectName.textContent = projectList[index];
        const toDoContainer = document.createElement('div');
        const addToDoButton = document.createElement('button');
        
        
        addToDoButton.innerHTML = 'Add ToDo';
        addToDoButton.addEventListener('click', ()=>{
            const listContainer = document.createElement('div');
            listContainer.classList.add('list-container');

            //Think need make lkist element 
            const todoItems = document.createElement('div');
            const todoInput = document.createElement('input');
            todoInput.placeholder = 'Add New Task!';
            const todoSubmit = document.createElement('button');
            todoSubmit.innerHTML = 'submit';

            todoSubmit.addEventListener('click', ()=>{
                const todoValue = todoInput.value;
                todoArray.push(todoValue);
                todoItems.innerHTML = todoArray;
                const deleteListItem = document.createElement('button');
                deleteListItem.innerHTML = 'Delete Item';
                todoItems.appendChild(deleteListItem);
                deleteListItem.addEventListener('click', ()=>{
                    const indexToRemove = todoArray.indexOf(todoValue);

                    if(indexToRemove !== -1){
                        todoArray.splice(indexToRemove, 1);
                        listContainer.removeChild(todoItems);
                        todoSubmit.style.display = 'none';
                    }
                });

                localStorage.setItem(projectList[index], JSON.stringify(todoArray));

            })
            todoItems.appendChild(todoInput);
            listContainer.appendChild(todoSubmit);
            listContainer.appendChild(todoItems);
            projectName.appendChild(listContainer);
            
            
        });
        const listContainer = document.createElement('div');
        const todoItems = document.createElement('div');
        todoArray.forEach((todoItem) => {
        const todoItemDiv = document.createElement('div');
        todoItemDiv.textContent = todoItem;
        todoItems.appendChild(todoItemDiv);
    });

    listContainer.appendChild(todoItems);
    toDoContainer.appendChild(addToDoButton);
    toDoContainer.appendChild(listContainer);
    projectName.appendChild(toDoContainer);

    }
   

}
export default popup;