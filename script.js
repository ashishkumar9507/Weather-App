const url= "https://api.openweathermap.org/data/2.5/weather?&units=metric" ;
const key = "639287557e7141939013dfa47957cc5e";
const city = document.querySelector("#searchBox");
const btn = document.querySelector("#searchBtn");
const cityname = document.querySelector("#city");

const humid = document.querySelector("#humid");
const wind = document.querySelector("#wind");

const pic = document.querySelector("#weatherPics");

const temp = document.querySelector("#temp");

btn.addEventListener('click' , ()=> {
    checkWeather(city.value);
});


async function checkWeather(name){
    
    const response = await fetch(url + `&q=${name}` + `&appid=${key}`);
    var data = await response.json();
    console.log(data);

    // custom error handling
    if(data.cod == 404) {
        alert("City Not Found in the DataBase");
        city.value="";
        city.placeholder = "Search another city";
        return
    }
    temp.innerHTML = Math.round(data.main.temp) + "°C";
    cityname.innerHTML = data.name;
    humid.innerHTML =data.main.humidity + "%";
    wind.innerHTML = data.wind.speed + "km/h";

    if(data.weather[0].main == "Clouds"){
        pic.src= "images/clouds.png";
    }else if(data.weather[0].main == "Clear"){
        pic.src ="images/clear.png";
    }else if(data.weather[0].main == "Drizzle"){
        pic.src ="images/drizzle.png";
    }else if(data.weather[0].main == "Rain"){
        pic.src ="images/rain.png";
    }else if(data.weather[0].main == "Snow"){
        pic.src ="images/snow.png";
    }else{
        pic.src= "images/mist.png";
    }

}
checkWeather("Patna");