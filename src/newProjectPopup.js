function projectPopup(){
    const popupContainer = document.getElementById('popup-container');
    const projectContainer = document.getElementById('project-container');
    const closePopup = document.getElementById('close-button');
    popupContainer.style.display = 'block';

    const currentProjects = [];

    const form = document.getElementById('project-popup-form')
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
        
        console.log('Title:', title);
        console.log('Description:', description);
        console.log('Priority:', priority);
        console.log('Current Projects:', currentProjects);

        const projectContent = `
        <p>Title: ${title}</p>
        <p>Description: ${description}</p>
        <p>Priority: ${priority}</p>
        `;
        
        
        projectContainer.innerHTML = projectContent;
        
        form.reset(); 
        popupContainer.style.display = 'none';
        
    });

    closePopup.addEventListener('click', () => {
        popupContainer.style.display = 'none';
    });
/*
    Need add loop through array ForEach add edit button, button [i], allow
    edditing of the element. 

    Add functionality to add to a project
    Sleect through [Array], element to allow dynamic editing. 
*/


}
export default projectPopup;