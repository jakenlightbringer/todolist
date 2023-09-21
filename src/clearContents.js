function clearContents(){
    const projectContainer = document.getElementById("project-container");
    console.log('click');
    while (projectContainer.firstChild) {
        projectContainer.removeChild(projectContainer.firstChild);
    }
}
export default clearContents;