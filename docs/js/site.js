document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-item");
    const navbarId = document.getElementById("navbarId");
    const stickyImage = document.getElementById("a_backHome");
    const gitStick = document.getElementById("git_image");
    const linkedListStick = document.getElementById("linked_image");


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

                const hideHomeButton = entry.target.id === "sOne"; //instead of if statement
                stickyImage.hidden = hideHomeButton; 

                const hideContact = entry.target.id === "sOne" || entry.target.id === "sTwo"; //instead of if statement
                gitStick.style.transition = "opacity 3s ease-in-out";
                gitStick.style.opacity = "1";
                gitStick.hidden = hideContact;
                linkedListStick.hidden = hideContact;
                console.log(hideContact ? "Contact stick hidden" : "Contact stick show"); 

                const hideNavBar = entry.target.id === "sOne"
                navbarId.remove = hideNavBar;
                console.log(hideNavBar ? "navbar hidden" : "Navbar not hidden");
            }
            
        });
        
    },
    {threshold: 0.5}
)

    sections.forEach(section => {
        observer.observe(section);
    });

});