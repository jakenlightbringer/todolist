function popup(){
    const sideBarContainer = document.getElementById('sidebar-container');
    const popupButton = document.getElementById('new-button');
    const popupContainer = document.getElementById('add-project-popup');
    const popupForm = document.getElementById('add-project-form');

    const currentproject = {
        projectName: this.projectName
    }

    popupButton.addEventListener('click', () =>{
        popupContainer.style.display = 'block';
    });
    popupForm.addEventListener('submit', (e)=>{
        e.preventDefault();
        //popupContainer.style.display = 'none';
        //button added to li 
        const sideBarItem = document.createElement('li');
        const sideBarValue = document.getElementById('project').value;
        sideBarItem.innerHTML = sideBarValue;
        sideBarContainer.appendChild(sideBarItem);
        popupForm.reset();

    });
   

}
export default popup;



/*

    const projectList = []; // Array to store projects

   

    popupForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const sideBarItem = document.createElement('li');
        const sideBarValue = document.getElementById('project').value;

        // Add the new project to the array
        projectList.push(sideBarValue);

        // Set the innerHTML of the sidebar item to the new project
        sideBarItem.innerHTML = sideBarValue;

        // Create a project button for switching to this project
        const projectButton = document.createElement('button');
        projectButton.textContent = sideBarValue;
        projectButton.addEventListener('click', () => {
            // Find the index of the clicked project button in the array
            const index = projectList.indexOf(sideBarValue);
            if (index !== -1) {
                // Switch to the selected project
                switchToProject(index);
            }
        });

        // Append the project button to the sidebar container
        sideBarContainer.appendChild(projectButton);

        popupForm.reset();
        popupContainer.style.display = 'none';
    });

    // Function to switch to a specific project
    function switchToProject(index) {
        // Update your UI to display the selected project based on the index
        // For example, you can set the content of a div to the selected project name
        // Example: document.getElementById('current-project-name').textContent = projectList[index];
    }
}

export default popup;


*/