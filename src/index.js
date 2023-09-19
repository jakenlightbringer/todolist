
import addProject from "/home/jake/todolist/src/add.png"
import projectPopup from "./newProjectPopup";
import './styles.css';




document.addEventListener('DOMContentLoaded', () =>{
    const newButtonProject = document.getElementById("new-button");

    newButtonProject.addEventListener('click', () => {
        
        projectPopup();
    });
    
    
});
