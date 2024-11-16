import config from "./config.js"; // Import the API key from config.js

// OpenWeatherMap API key
const API_KEY = config.API_KEY;

const weatherInfo = document.getElementById("weather-info");
const errorMessage = document.getElementById("error-message");
const cityName = document.getElementById("city-name");
const Temperature = document.getElementById("temp");
const Weather = document.getElementById("weather");
const weatherIcon = document.getElementById("weather-icon");
const Humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("wind-speed");
const sunRise = document.getElementById("sunrise");
const sunSet = document.getElementById("sunset");
const feelsLike = document.getElementById("feels-like");

// Add an event listener to the document that triggers when the DOM content is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Automatically fetch weather data for the city "Mysore" once the page is loaded
  fetchWeather("Mysore");
});

// Add an event listener to the "search-btn" element that listens for a "click" event
document.getElementById("search-btn").addEventListener("click", function () {
  // Retrieve the value from the input field with id "city" and remove any leading or trailing whitespace
  const city = document.getElementById("city").value.trim();

  // Check if the city input is empty
  if (!city) {
    // If empty, display an error message prompting the user to enter a city name
    showError("Please enter a city name.");
    return; // Exit the function early if no city name is provided
  }

  // If a city name is provided, call the fetchWeather function with the city name as an argument
  fetchWeather(city);
});

// Define an asynchronous function named fetchWeather that takes a city name as an argument
const fetchWeather = async (city) => {
  try {
    // Make a request to the OpenWeatherMap API using the provided city name and API key
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );

    // Check if the response from the API is not successful (status code not in the range 200-299)
    if (!response.ok) {
      // If the response is not ok, throw an error with a message
      throw new Error("Network response was not ok");
    }

    // Parse the JSON data from the response
    const weatherData = await response.json();

    // Log the weather data to the console in a formatted manner for debugging purposes
    console.log(JSON.stringify(weatherData, null, 2));

    // Call the showWeather function and pass the weatherData object to it
    // This function is responsible for displaying the weather information on the UI
    showWeather(weatherData);
  } catch (error) {
    // If an error occurs during the fetch or JSON parsing, log the error message to the console
    console.error("Fetch error: ", error);
    // Call the showError function with the error message as an argument
    showError(error.message);
  }
};

// Define a function named showWeather that takes a single parameter 'data'
const showWeather = (data) => {
  // Hide the error message by adding the 'hidden' class to the errorMessage element
  errorMessage.classList.add('hidden');
  
  // Display the weather information by removing the 'hidden' class from the weatherInfo element
  weatherInfo.classList.remove('hidden');
  
  // Update the cityName element with the city name from the data object
  cityName.textContent = data.name;
  
  // Construct the icon file name using the weather icon code from the data object
  const icon = `${data.weather[0].icon}.png`;
  
  // Set the source of the weatherIcon element to the constructed icon path
  weatherIcon.src = `./assets/${icon}`;
  
  // Set the alt attribute of the weatherIcon element to the weather description from the data object
  weatherIcon.alt = data.weather[0].description;
  
  // Update the Weather element with the weather description from the data object
  Weather.textContent = data.weather[0].description;
  
  // Update the Temperature element with the rounded temperature value from the data object
  Temperature.textContent = `${Math.round(data.main.temp)}°C`;
  
  // Update the Humidity element with the humidity percentage from the data object
  Humidity.textContent = `${data.main.humidity}%`;
  
  // Update the windSpeed element with the wind speed from the data object
  windSpeed.textContent = `${data.wind.speed} Km/hr`;

  // Update the sunRise element with the formatted sunrise time from the data object
  sunRise.textContent = `${formatTime(data.sys.sunrise)}`;
  
  // Update the sunSet element with the formatted sunset time from the data object
  sunSet.textContent = `${formatTime(data.sys.sunset)}`;

  // Update the feelsLike element with the rounded 'feels like' temperature value from the data object
  feelsLike.textContent = `${Math.round(data.main.feels_like)}°C`;
};

// Define a function named showError that takes a single parameter 'message'
const showError = (message) => {
  // Access the element with the id "weather-info" and add the "hidden" class to it
  // This action hides the weather information section from the user interface
  weatherInfo.classList.add("hidden");

  // Remove the "hidden" class from the error message element
  // This action makes the error message visible to the user
  errorMessage.classList.remove("hidden");

  // Set the text content of the error message element to the provided 'message'
  // This displays the specific error message to the user
  errorMessage.textContent = message;
};

// Define a function named formatTime that takes a single parameter 'timestamp'
const formatTime = (timestamp) => { 
  // Create a new Date object, converting the timestamp from seconds to milliseconds
  const date = new Date(timestamp * 1000);
  
  // Extract hours and minutes in 12-hour format with AM/PM
  const options = { hour: 'numeric', minute: 'numeric', hour12: true };
  
  // Return the formatted time string
  return date.toLocaleTimeString([], options);
};
