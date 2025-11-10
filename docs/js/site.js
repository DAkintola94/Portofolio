document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-item");
    const stickyImage = document.getElementById("a_backHome");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry =>  {
            if(entry.isIntersecting){
                console.log("you are currently at", entry.target.id)

                navLinks.forEach(link => link.classList.remove("active"));
                const idValue = entry.target.id;
                const activeLink = document.querySelector(`.nav-item[href="#${idValue}"]`);
                

                if(activeLink)
                    activeLink.classList.add("active");

                if(entry.target.id === "sOne"){
                    console.log("Hei der");
                    stickyImage.hidden = true;
                }
                else {
                    stickyImage.hidden = false;
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