const apiKey = '9190fa609f85c486abf5e59e0ee10b24';
const loader = document.getElementById('loader');

async function fetchWeather(city) {
  loader.style.display = 'flex';
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);
    if (!response.ok) throw new Error('City not found');
    const data = await response.json();
    updateUI(data);
  } catch (error) {
    alert(error.message);
  } finally {
    loader.style.display = 'none';
  }
}

function updateUI(data) {
  document.getElementById('cityName').textContent = `${data.name}, ${data.sys.country}`;
  document.getElementById('dateDisplay').textContent = formatDate(new Date());
  document.getElementById('tempDisplay').innerHTML = `${Math.round(data.main.temp)}<span>&deg;C</span>`;
  document.getElementById('weatherDesc').textContent = data.weather[0].description;
  document.getElementById('feelsLike').textContent = `${Math.round(data.main.feels_like)}°C`;
  document.getElementById('humidity').textContent = `${data.main.humidity}%`;
  document.getElementById('windSpeed').textContent = `${data.wind.speed} km/h`;
  document.getElementById('pressure').textContent = `${data.main.pressure} hPa`;

  const iconCode = data.weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@4x.png`;
  document.getElementById('weatherIcon').src = iconUrl;
}

function formatDate(date) {
  const options = { weekday: 'long', day: 'numeric', month: 'long' };
  return date.toLocaleDateString('en-US', options);
}

window.onload = () => {
  fetchWeather('Kathmandu');
};