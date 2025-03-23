import React, { useState, useEffect } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import "./App.css";

const WEATHER_API_KEY = "7f3eb98aba7eb79745eed4bea5717cca";
const MOON_API_KEY = "91e2462e5145438e844f73f6a1d8cd54";

const App = () => {
  const [city, setCity] = useState("New York");
  const [startDate, setStartDate] = useState(new Date().toISOString().slice(0, 10));
  const [forecastDays, setForecastDays] = useState(5);
  const [unit, setUnit] = useState("metric");
  const [theme, setTheme] = useState("light");
  const [weatherData, setWeatherData] = useState([]);
  const [aqi, setAqi] = useState(null);
  const [moonPhase, setMoonPhase] = useState("");
  const [error, setError] = useState("");

  const fetchWeather = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${WEATHER_API_KEY}&units=${unit}`
      );
      const filtered = response.data.list.filter(item =>
        item.dt_txt.includes("12:00:00")
      ).slice(0, forecastDays);
      setWeatherData(filtered);
    } catch (err) {
      setError("Error fetching weather data.");
    }
  };

  const fetchAQI = async () => {
    try {
      const geo = await axios.get(
        `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${WEATHER_API_KEY}`
      );
      const { lat, lon } = geo.data[0];
      const res = await axios.get(
        `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`
      );
      setAqi(res.data.list[0].main.aqi);
    } catch (err) {
      setAqi("Unknown");
    }
  };

  const fetchMoon = async () => {
    try {
      const moon = await axios.get(
        `https://api.ipgeolocation.io/astronomy?apiKey=${MOON_API_KEY}&location=${city}`
      );
      setMoonPhase(moon.data.moon_phase);
    } catch {
      setMoonPhase("Unknown");
    }
  };

  const handleForecast = () => {
    fetchWeather();
    fetchAQI();
    fetchMoon();
  };

  useEffect(() => {
    handleForecast();
  }, []);

  const chartData = {
    labels: weatherData.map(item => new Date(item.dt_txt).toLocaleDateString()),
    datasets: [{
      label: `Temperature (°${unit === "metric" ? "C" : "F"})`,
      data: weatherData.map(item => item.main.temp),
      borderColor: theme === "light" ? "#333" : "#fff",
      backgroundColor: theme === "light" ? "#ddd" : "#222",
      tension: 0.3,
      fill: false,
      borderDash: [5, 5],
    }]
  };

  const getSuggestion = (desc) => {
    if (desc.includes("rain")) return "🌧️ Suggestion: Carry an umbrella!";
    if (desc.includes("clear")) return "☀️ Suggestion: Great day for outdoor activities!";
    return "⛅ Suggestion: Moderate weather today.";
  };

  return (
    <div className={`app ${theme}`}>
      <h1 className="title">🌍 Weather Forecast</h1>

      <div className="top-bar">
        <input value={city} onChange={(e) => setCity(e.target.value)} />
        <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
        <select value={forecastDays} onChange={(e) => setForecastDays(e.target.value)}>
          <option>5</option><option>7</option><option>10</option>
        </select>
        <button onClick={handleForecast}>Show Forecast</button>
        <button onClick={() => setUnit(unit === "metric" ? "imperial" : "metric")}>
          °{unit === "metric" ? "F" : "C"}
        </button>
        <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
          {theme === "light" ? "🌙 Dark" : "☀️ Light"}
        </button>
      </div>

      <div className="info-bar">
        <span>🌙 Moon Phase: {moonPhase}</span>
        <span>🌫️ AQI: {aqi ?? "Loading..."}</span>
      </div>

      {error && <p className="error">{error}</p>}

      <div className="main-content">
        <div className="forecast-cards">
          {weatherData.map((item, i) => (
            <div className="card" key={i}>
              <h3>{new Date(item.dt_txt).toLocaleDateString('en-US', { weekday: 'long' })}</h3>
              <p>🌡️ Temp: {item.main.temp}° | Feels like: {item.main.feels_like}°</p>
              <p>🌤️ Weather: {item.weather[0].description}</p>
              <p>💧 Humidity: {item.main.humidity}% | 🧭 Pressure: {item.main.pressure} hPa</p>
              <p>👁️ Visibility: {item.visibility / 1000} km | 💨 Wind: {item.wind.speed} m/s</p>
              <p>{getSuggestion(item.weather[0].description)}</p>
            </div>
          ))}
        </div>

        <div className="chart-box">
          <h2>Weather Trends</h2>
          <Line data={chartData} />
        </div>
      </div>
    </div>
  );
};

export default App;
