const token = "";//place your access token here from the weather api 

// Here is where the data are fetched from the API
const fetchData = async (url) => {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Network response was not ok: ${res.statusText}`);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("There was an error while fetching the data:", error);
    return null;
  }
};

const renderCurrentWeather = (data) => {
  const currentIcon = document.getElementById("current-icon");
  const currentDay = document.getElementById("current-day");
  const currentCity = document.getElementById("current-city");
  const currentTemp = document.getElementById("current-temp");
  const currentDescription = document.getElementById("current-description");

  if (!data || !data.weather || !data.weather[0]) {
    currentCity.textContent = "Unable to retrieve weather data.";
    return;
  }

  currentIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  currentCity.textContent = data.name;
  currentTemp.textContent = `Temperature: ${data.main.temp} °C`;
  currentDescription.textContent = data.weather[0].description;
};

// Rendering data for the forecast
const renderForecast = (data) => {
  const forecastContainer = document.getElementById("forecast");
  forecastContainer.innerHTML = "";

  if (!data || !data.list) {
    const errorMessage = document.createElement("p");
    errorMessage.textContent = "Unable to retrieve forecast data.";
    forecastContainer.appendChild(errorMessage);
    return;
  }

  // Filter the data for the next four days
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const forecastDays = data.list
    .filter((entry) => {
      const date = new Date(entry.dt * 1000);
      return date.getHours() === 12 && date > today;
    })
    .slice(0, 4);
  forecastDays.map((day) => {
    const forecastDay = document.createElement("div");
    forecastDay.className = "forecast-day";

    const dayName = new Date(day.dt * 1000).toLocaleDateString("en-US", {
      weekday: "long",
    });
    const dayTemp = day.main.temp;
    const dayIcon = day.weather[0].icon;
    const dayDescription = day.weather[0].description;

    forecastDay.innerHTML = `
            <p>${dayName}</p>
            <img src="http://openweathermap.org/img/wn/${dayIcon}.png" alt="Weather icon">
            <p>${dayTemp}°C</p>
            <p>${dayDescription}</p>
        `;
    forecastContainer.appendChild(forecastDay);
  });
};

// Here is the API URL for fetching the days and the city name
const fetchWeather = async (city) => {
  const currentWeatherEndpoint = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${token}`;
  const forecastEndpoint = `https://api.openweathermap.org/data/2.5/forecast?units=metric&q=${city}&appid=${token}`;

  const currentWeatherData = await fetchData(currentWeatherEndpoint);
  const forecastData = await fetchData(forecastEndpoint);

  renderCurrentWeather(currentWeatherData);
  renderForecast(forecastData);
};

// Code for searching the city name
const searchWeather = () => {
  const city = document.getElementById("city-input").value;
  if (city) {
    fetchWeather(city);
  } else {
    console.error("City input is empty");
  }
};

// Adding the event listener to the input field
document.getElementById("city-input").addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    searchWeather();
  }
});
