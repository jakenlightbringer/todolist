import projectPopup from "./newProjectPopup";
import todoList from "./sample";
import './styles.css';




document.addEventListener('DOMContentLoaded', () =>{
    const newButtonProject = document.getElementById("new-button");
    todoList();
    
    

    newButtonProject.addEventListener('click', () => {
        projectPopup();
    });
   
    
});
