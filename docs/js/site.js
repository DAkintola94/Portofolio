document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll("section");
    const stickyImage = document.getElementById("a_backHome");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry =>  {
            if(entry.isIntersecting){
                console.log("you are currently at", entry.target.id)
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