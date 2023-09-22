import clearContents from "./clearContents";
import todoList from "./sample";

function projectPopup() {
  const addProjectPopup = document.getElementById("add-project-popup");
  const sidebarItems = document.querySelectorAll('li');
  const sidebarContainer = document.getElementById('sidebar-container');
  const projectForm = document.getElementById('add-project-form');
  const todoButton = document.getElementsByClassName("project-button");
  const projectContainer = document.getElementById('project-container');
    
    
  addProjectPopup.style.display = "block";
  const sidebarArray = Array.from(sidebarItems);

  

  projectForm.addEventListener('submit', (e) =>{
    e.preventDefault();
    const projectName = projectForm.elements['project'].value;
    const projectLi = document.createElement('li');
    const projectButton = document.createElement('button');
    projectButton.classList.add('project-button')
    projectButton.innerHTML = projectName;

    

    sidebarArray.push(projectName);
    projectLi.appendChild(projectButton);
    sidebarContainer.appendChild(projectLi);
    projectForm.reset();
    addProjectPopup.style.display = "none";


    projectButton.addEventListener('click', ()=>{
      clearContents();
      todoList.setCurrentProject(projectName);
      //Set Current Project send to projectSwitcher => Send to sample.js To set the current project
    })

    
  });

  




  }
  
  export default projectPopup;
  