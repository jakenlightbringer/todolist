function projectPopup() {
    const popupContainer = document.getElementById('popup-container');
    const projectContainer = document.getElementById('project-container');
    const closePopup = document.getElementById('close-button');
    popupContainer.style.display = 'block';
  
    const currentProjects = [];
  
    const form = document.getElementById('project-popup-form');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
  
      const title = document.getElementById('title').value;
      const description = document.getElementById('description').value;
      const priority = document.getElementById('priority').value;
  
      const projectData = {
        title: title,
        description: description,
        priority: priority
      };
      currentProjects.push(projectData);
  
      displayProjects();
  
      form.reset();
      popupContainer.style.display = 'none';
    });
  
    closePopup.addEventListener('click', () => {
      popupContainer.style.display = 'none';
    });
  
    function displayProjects() {
      currentProjects.forEach((element, index) => {
        const projectDiv = document.createElement('div');
  
        const projectContent = `
          <p>Title: ${element.title}</p>
          <p>Description: ${element.description}</p>
          <p>Priority: ${element.priority}</p>
        `;
  
        projectDiv.innerHTML = projectContent;
  
        const editButton = document.createElement('button');
        editButton.innerHTML = 'Edit';
  
        editButton.addEventListener('click', () => {
          const titleInput = document.createElement('input');
          titleInput.value = element.title;
  
          const descriptionInput = document.createElement('input');
          descriptionInput.value = element.description;
  
          const priorityInput = document.createElement('input');
          priorityInput.value = element.priority;
  
          const saveButton = document.createElement('button');
          saveButton.innerHTML = 'Save';
  
          saveButton.addEventListener('click', () => {
            currentProjects[index].title = titleInput.value;
            currentProjects[index].description = descriptionInput.value;
            currentProjects[index].priority = priorityInput.value;
            displayProjects(); // Update the display after saving
          });
  
          projectDiv.appendChild(titleInput);
          projectDiv.appendChild(descriptionInput);
          projectDiv.appendChild(priorityInput);
          projectDiv.appendChild(saveButton);
        });
  
        projectDiv.appendChild(editButton);
  
        // Replace the existing project with the updated one
        const existingProject = projectContainer.querySelector(`[data-index="${index}"]`);
        if (existingProject) {
          projectContainer.replaceChild(projectDiv, existingProject);
        } else {
          // If the project doesn't exist, simply append it
          projectContainer.appendChild(projectDiv);
        }
      });
    }
  
    // Initial display of projects
    displayProjects();
  }
  
  export default projectPopup;
  