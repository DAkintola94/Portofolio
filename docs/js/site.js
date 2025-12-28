document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-item");
    const navbarId = document.getElementById("navbarId");
    const stickyImage = document.getElementById("image_backHome");



    var typed = new Typed(".input", {
        strings: ["Information Technology student",
            "Enthusiastic",
            "Creative",
            "Collaborative"
        ],
        typedSpeed: 70,
        backSpeed: 55,
        loop: true
    })

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry =>  {
            if(entry.isIntersecting){
                console.log("you are currently at", entry.target.id)

                navLinks.forEach(link => link.classList.remove("active"));
                const idValue = entry.target.id;
                const activeLink = document.querySelector(`.nav-item[href="#${idValue}"]`);
                
                if(activeLink){
                    activeLink.classList.add("active");
                }

                if(entry.target.id !== "sOne"){
                    navbarId.classList.add("hidden");
                } else {
                    navbarId.classList.remove("hidden");
                }

                if(entry.target.id === "sOne"){
                    stickyImage.classList.add("hideSticker");
                } else {
                    stickyImage.classList.remove("hideSticker");
                }
            }
            
        });
        
    },
    {threshold: 0.5}
)

    sections.forEach(section => {
        observer.observe(section);
    });

});