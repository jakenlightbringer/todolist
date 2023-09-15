

function sampleProject(){
    const sampleContainer = document.getElementById('project-container');
    

    const titleBox = document.createElement('input')
    titleBox.type = 'text';
    titleBox.placeholder = "Enter Title..."
    

    sampleContainer.appendChild(titleBox);

}
export default sampleProject;