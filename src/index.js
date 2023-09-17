import sampleProject from "./sample";
import addProject from "/home/jake/todolist/src/add.png"
import projectPopup from "./newProjectPopup";
import './styles.css';



const buttonContainer = document.getElementById('new-button');

function plusButton(){
    

    const newButtonImage = document.createElement('img');
    newButtonImage.src = addProject;
    newButtonImage.style.height = "25px";
    newButtonImage.style.width = "25px";
    
    buttonContainer.appendChild(newButtonImage);
}
buttonContainer.addEventListener('click', ()=>{
    projectPopup();
});

document.addEventListener('DOMContentLoaded', () =>{
    sampleProject();
    plusButton();
});
