document.addEventListener('DOMContentLoaded', () => {
    const wordIntoArray = [...document.querySelectorAll(".wordMix")]; 
    // getting all elements from class wordMix and holding them into array to loop through
    // [...] converts the NodeList into a real array. NodeList = collection of DOM nodes return by methods (querySelectorAll())

    let current = 0;

    const displayTime = 5000; // how long a word will show in millisecond
    
    //starting with the first word in the array
    wordIntoArray[current].classList.add("show");

    setInterval(() => {
        //remove current word
        wordIntoArray[current].classList.remove("show");

        //next, current integer + 1 modular the number of items in the array
        current = (current + 1) % wordIntoArray.length;
        wordIntoArray[current].classList.add("show");
    }, displayTime);


});