document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll("section");
    const navBar = document.querySelector(".navbar");
    const barTwo = document.querySelector(".barTwo");
    const barThree = document.querySelector(".barThree");
    const barFour = document.querySelector(".barFour");
    const barFive = document.querySelector(".barFive");
    const stickyImage = document.getElementById("a_backHome");

    const sectionColors = {
        sOne: "red",
        sTwo: "red",
        sThree: "red"
    };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry =>  {
            if(entry.isIntersecting){
                console.log("you are currently at", entry.target.id)
                const idValue = entry.target.id;
                console.log(idValue);
                if(sectionColors[idValue]){
                    //navBar.style.backgroundColor = sectionColors[idValue]; 
                   if(barTwo) barTwo.style.color = sectionColors[idValue];
                }
                if(entry.target.id === "sOne"){
                    console.log("Hei der");
                    stickyImage.hidden = true;
                }
                else {
                    stickyImage.hidden = false;
                }
            }
        })
    })

    sections.forEach(section => {
        observer.observe(section);
    });

})