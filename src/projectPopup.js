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
        // Update your UI to display the selected project based on the index
        // For example, you can set the content of a div to the selected project name
        const projectName = document.getElementById('current-project-name');
        const todoArray = [];
        projectName.textContent = projectList[index];
        const toDoContainer = document.createElement('div');
        const addToDoButton = document.createElement('button');
        addToDoButton.innerHTML = 'Add ToDo';
        addToDoButton.addEventListener('click', ()=>{
            const listContainer = document.createElement('div');
            const todoItems = document.createElement('div');
            const todoInput = document.createElement('input');
            todoInput.placeholder = 'Add New Task!';
            const todoSubmit = document.createElement('button');
            todoSubmit.innerHTML = 'submit';

            todoSubmit.addEventListener('click', ()=>{
                const todoValue = todoInput.value;
                todoArray.push(todoValue);
                todoItems.innerHTML = todoArray;


            })
            todoItems.appendChild(todoInput);
            todoItems.appendChild(todoSubmit);
            listContainer.appendChild(todoItems);
            projectName.appendChild(listContainer);
            
            
        });
        toDoContainer.appendChild(addToDoButton);
        projectName.appendChild(toDoContainer);
    }
   

}
export default popup;
