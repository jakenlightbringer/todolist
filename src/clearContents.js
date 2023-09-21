function clearContents(){
    console.log('click');
    while (projectContainer.firstChild) {
        projectContainer.removeChild(projectContainer.firstChild);
    }
}
export default clearContents;