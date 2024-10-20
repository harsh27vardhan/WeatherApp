const API_KEY = "7212f001777897f018e1830af9a872c5";

const searchInp = document.getElementById("city");
const form = document.querySelector("form");

const place = document.querySelector("#location");
const condition = document.querySelector("#condition");
const temp = document.querySelector("#temperature");
const temp_min = document.querySelector("#min-temp");
const temp_max = document.querySelector("#max-temp");
const visibility = document.querySelector("#visibitily");
const wind_speeed = document.querySelector("#wind-speed");
const wind_deg = document.querySelector("#wind-deg");
const humidity_val = document.querySelector("#humidity-value");
const pressure = document.querySelector("#pressure");



async function fun(){
    if(searchInp.value === ""){
        console.log("Please enter a city in the search input.")
    }
    else{
        try{
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchInp.value}&appid=${API_KEY}&units=metric`)
            if(!response.ok){
                throw console.log(`HTTP error! ststus: ${response.status}`)
            }
            const data = await response.json();
            console.log("Data:",data);

            place.innerText = data.name;
            condition.innerText = data.weather[0].description;
            temp.innerHTML = `<p>${data.main.temp}&deg;C`;
            temp_min.innerHTML = `<p>${data.main.temp_min}&deg;C</p>`;
            temp_max.innerHTML = `<p>${data.main.temp_max}&deg;C</p>`;
            visibility.innerText = data.visibility;
            wind_speeed.innerHTML = `<p>${data.wind.speed} km/h`;
            wind_deg.innerHTML = `<p>${data.wind.deg} &deg;</p>`;
            humidity_val.innerText = data.main.humidity;
            pressure.innerText = data.main.pressure;

        }
        catch(error){
            console.error("Error fetching data:",error.message);
        }
        // fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchInp.value}&appid=${API_KEY}&units=metric`)
        // // fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchedCity}&appid=${API_KEY}&units=metric`)
        // .then((res)=>res.json())
        // .then((data)=>console.log(data));
    }
}

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    fun();
})