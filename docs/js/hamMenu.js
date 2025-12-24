document.addEventListener('DOMContentLoaded', () => {
const hamburgerMenu = document.querySelector(".mobile_navbar");
const offScreenMenu = document.querySelector(".off-screen-menu");
const aTagClick = document.querySelectorAll(".off-screen-menu a"); // this only returns a collection of element from the class 
// (returns a NodeList, similar to array-like list of element)
// aTagClick is not a single element, It’s a NodeList, so to need another loop later to work with each individual elements

hamburgerMenu.addEventListener("click", () => {
    hamburgerMenu.classList.toggle("initiate");
    offScreenMenu.classList.toggle("initiate");
})

aTagClick.forEach(link => { //Another loop again since event listeners are attached to individual elements, not to a collection
    link.addEventListener("click", () => {
        hamburgerMenu.classList.remove("initiate");
        offScreenMenu.classList.remove("initiate");
    });
});

window.addEventListener("click", function(e){
    if(!hamburgerMenu.contains(e.target) && (!offScreenMenu.contains(e.target))){
    hamburgerMenu.classList.remove("initiate");
    offScreenMenu.classList.remove("initiate");
    }
});

});