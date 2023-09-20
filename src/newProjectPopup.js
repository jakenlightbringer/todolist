function projectPopup() {
  const addProjectPopup = document.getElementById("add-project-popup");
  const sidebarItems = document.querySelectorAll('li');
  const sidebarContainer = document.getElementById('sidebar-container');
  const projectForm = document.getElementById('add-project-form');
  const projectContainer = document.getElementById('project-container');
    
    
  addProjectPopup.style.display = "block";
  const sidebarArray = Array.from(sidebarItems);
  

  projectForm.addEventListener('submit', (e) =>{
    e.preventDefault();
    const projectName = projectForm.elements['project'].value;
    const projectButton = document.createElement('button');
    projectButton.innerHTML = projectName;

    const newProjectContainer = document.createElement('div');
    projectContainer.appendChild(newProjectContainer);

    sidebarArray.push(projectName);
    sidebarContainer.appendChild(projectButton);
    projectForm.reset();
    addProjectPopup.style.display = "none";
    
  });

    
    
    console.log(sidebarArray);




  }
  
  export default projectPopup;
  