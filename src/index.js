import sampleProject from "./sample";
import addProject from "/home/jake/todolist/src/add.png"


const buttonContainer = document.getElementById('new-button');

function plusButton(){
    

    const newButtonImage = document.createElement('img');
    newButtonImage.src = addProject;
    newButtonImage.style.height = "25px";
    newButtonImage.style.width = "25px";

    buttonContainer.appendChild(newButtonImage);
}

document.addEventListener('DOMContentLoaded', () =>{
    sampleProject();
    plusButton();
})
