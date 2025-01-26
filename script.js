

const currentDateElement = document.getElementById("current-date");
const cityInput = document.getElementById("city-input");
const searchForm = document.getElementById("search-form");
const temperatureElement = document.getElementById("temperature");
const conditionElement = document.getElementById("condition");
const feelsLikeElement = document.getElementById("feels-like");
const humidityElement = document.getElementById("humidity");
const windElement = document.getElementById("wind");
const weatherIcon = document.getElementById("weather-icon");


function updateDateTime() {
    const now = new Date();
    const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' };
    currentDateElement.textContent = now.toLocaleDateString('en-US', options);
}
updateDateTime();
setInterval(updateDateTime, 60000);


const mockWeatherData = {
    "New York": { temp: "10°C", condition: "Sunny", feelsLike: "8°C", humidity: "60%", wind: "12 km/h", icon: "sunny.png" },
    "Paris": { temp: "12°C", condition: "Cloudy", feelsLike: "11°C", humidity: "70%", wind: "10 km/h", icon: "cloudy.png" },
    "Tokyo": { temp: "15°C", condition: "Rainy", feelsLike: "14°C", humidity: "80%", wind: "8 km/h", icon: "rainy.png" },
};


searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const city = cityInput.value.trim();
    if (mockWeatherData[city]) {
        const data = mockWeatherData[city];
        temperatureElement.textContent = data.temp;
        conditionElement.textContent = data.condition;
        feelsLikeElement.textContent = data.feelsLike;
        humidityElement.textContent = data.humidity;
        windElement.textContent = data.wind;
        weatherIcon.src = data.icon;
        weatherIcon.alt = data.condition;
    } else {
        alert("City not found. Try another one!");
    }
    cityInput.value = "";
});


function setTheme() {
    const hours = new Date().getHours();
    const body = document.body;
    if (hours >= 6 && hours < 18) {
        body.style.backgroundColor = "#F9FAFB";
        body.style.color = "#2E2E38";
    } else {
        body.style.backgroundColor = "#2E2E38";
        body.style.color = "#F9FAFB";
    }
}
setTheme();


function addWeatherAnimations() {
    const weatherSection = document.getElementById("current-weather");
    weatherSection.style.transition = "all 0.5s ease-in-out";
    weatherSection.style.transform = "scale(1.1)";
    setTimeout(() => {
        weatherSection.style.transform = "scale(1)";
    }, 500);
}
searchForm.addEventListener("submit", addWeatherAnimations);


const forecastDays = document.querySelectorAll(".forecast-day");
forecastDays.forEach(day => {
    day.addEventListener("mouseenter", () => {
        day.style.transform = "scale(1.1)";
        day.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
    });
    day.addEventListener("mouseleave", () => {
        day.style.transform = "scale(1)";
        day.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";
    });
});

console.log("Weather App Loaded Successfully!");
