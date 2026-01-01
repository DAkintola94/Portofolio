document.addEventListener('DOMContentLoaded', () => {

if(window.matchMedia('screen and (max-width: 768px)').matches)
{
console.log("Welcome to mobile section");
const hamburgerMenu = document.querySelector(".mobile_navbar"); //querySelector returns the first element, therefor you dont need loop to work with single items

const offScreenMenu = document.querySelector(".off-screen-menu"); //querySelector returns the first element, therefor you dont need loop to work with single items

const aTagClick = document.querySelectorAll(".off-screen-menu a"); // querySelectorAll returns a collection of element from the class 
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

}

});