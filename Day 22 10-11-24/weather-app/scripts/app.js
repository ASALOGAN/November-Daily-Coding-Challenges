// Define constants for API access
const apiKey = "YOUR_API_KEY";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather";

// Get elements from DOM
const form = document.getElementById("weatherForm");
const cityInput = document.getElementById("cityInput");
const weatherResult = document.getElementById("weatherResult");
const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature");
const condition = document.getElementById("condition");
const error = document.getElementById("error");

// Event listener for form submission
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const city = cityInput.value.trim();
  if (city) {
    fetchWeather(city);
  }
});

// Function to fetch weather data
async function fetchWeather(city) {
  try {
    const response = await fetch(
      `${apiUrl}?q=${city}&appid=${apiKey}&units=metric`
    );
    if (!response.ok) throw new Error("City not found");
    const data = await response.json();
    displayWeather(data);
  } catch (err) {
    showError(err.message);
  }
}

// Function to display weather data
function displayWeather(data) {
  cityName.textContent = data.name;
  temperature.textContent = `Temperature: ${data.main.temp}°C`;
  condition.textContent = `Condition: ${data.weather[0].description}`;

  weatherResult.classList.remove("hidden");
  error.classList.add("hidden");
}

// Function to show error messages
function showError(message) {
  error.textContent = message;
  error.classList.remove("hidden");
  weatherResult.classList.add("hidden");
}
