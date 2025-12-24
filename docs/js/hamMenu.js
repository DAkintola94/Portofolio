document.addEventListener('DOMContentLoaded', () => {
const hamburgerMenu = document.querySelector(".mobile_navbar");
const offScreenMenu = document.querySelector(".off-screen-menu");
const aTagClick = document.querySelectorAll(".off-screen-menu a");

hamburgerMenu.addEventListener("click", () => {
    hamburgerMenu.classList.toggle("initiate");
    offScreenMenu.classList.toggle("initiate");
})

aTagClick.forEach(link => {
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