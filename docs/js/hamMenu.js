document.addEventListener('DOMContentLoaded', () => {
const hamburgerMenu = document.querySelector(".mobile_navbar"); //querySelector returns the first element, therefor you dont need loop to work with single items

const offScreenMenu = document.querySelector(".off-screen-menu"); //querySelector returns the first element, therefor you dont need loop to work with single items

const aTagClick = document.querySelectorAll(".off-screen-menu a"); // querySelectorAll returns a collection of element from the class 
// (returns a NodeList, similar to array-like list of element)
// aTagClick is not a single element, It’s a NodeList, so to need another loop later to work with each individual elements

let timeoutId = null;
let scrolling = false;

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

window.addEventListener("scroll", () => { //The scroll event listener runs every time you scroll
    if(hamburgerMenu.classList.contains('initiate'))
        return;
    
    if(timeoutId){
        clearTimeout(timeoutId); 
    }

    if(!scrolling){ // check first if scrolling variable is false, when we start scrolling, we set it to true
        scrolling = true;
        hamburgerMenu.classList.add("deactivate");
    }

   timeoutId = setTimeout(() => {
    scrolling = false;
    hamburgerMenu.classList.remove("deactivate");
   }, 750 );
   
});


window.addEventListener("click", function(e){
    if(!hamburgerMenu.contains(e.target) && (!offScreenMenu.contains(e.target))){
    hamburgerMenu.classList.remove("initiate");
    offScreenMenu.classList.remove("initiate");
    }
});

});