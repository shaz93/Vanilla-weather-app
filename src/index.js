function refreshWeather(response) {
    let temperatureElement = document.querySelector("#temperature");
    let temperature = response.data.temperature.current;
    let cityElement = document.querySelector("#city");
    let description = document.querySelector("#description");
    let humidityElement = document.querySelector("#humidity");
    let windSpeedElement = document.querySelector("#wind-speed");
    let timeElement = document.querySelector("#time")
    let date = newDate(response.data.time *1000);
    let iconElement = document.querySelector("#icon");


cityElement.innerHTML = response.data.city;
descriptionElement.innerHTML = response.data.condition.description;
humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
windSpeedElement.innerHTML = `${response.data.wind.speed}km/h`;
timeElement.innerHTML = formateDate(date)
temperatureElement.innerHTML = Math.round(temperature);
iconElement.innerHTML = `<img src = "${response.data.condition.icon_url}"class="weather-app-icon"/>`;
}

function formatDate(date) {
    let minutes = date.getMinutes();
    let hours = date.getHours();
    let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let day = days[date.getDay()];

    if (minutes < 10) {
        minutes = `0 ${minutes}`;
    }
    return `$ {day} $ {hours}:$ {minutes}`;
}

function searchCity(city) {
    let apiKey = "643960765dfbctb234c6b4f7o500facf";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(refreshWeather);
}


function handleSearchSubmit (event) {
    event.preventDefault();

    let searchInput = document.querySelector("#search-form-input");
   let cityElement = document.querySelector("#city");
cityElement.innerHTML = searchInput.value;
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit",handleSearchSubmit);
