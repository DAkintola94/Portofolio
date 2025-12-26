document.addEventListener("DOMContentLoaded", () => {
const showLocation = document.getElementById("locationTester");

function getLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(getWeatherForecast, error); //call that request the device location
        console.log("There is a forecast in the building");
    } else {
        showLocation.innerHTML = "No location available";
    }
}

console.dir(getWeatherForecast);

function success(position){ //our internal function the act as callback inside function above
    showLocation.innerHTML =  position.coords.latitude + " " + " " + position.coords.longitude;
}

async function getWeatherForecast(position){
    const latValue = position.coords.latitude;
    const longValue = position.coords.longitude;
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${encodeURIComponent(latValue)}&longitude=${encodeURIComponent(longValue)}&current_weather=true`

    try {
       const response = await fetch(url)

       if(!response.ok){
        throw new Error (`An error occured, response status: ${response.status}`);
       }
       console.log("Hello there");
       const fetchResult = await response.json();
       console.log(fetchResult);
    }
    catch (error){
        console.error(error.message);
        console.log("Could not fetch weather api");
    }
}

function error(){
    alert("Sorry, couldn't get your location");
}

getLocation();




})