// src/components/Weather.js
import React, { useState } from "react";
import WeatherForm from "./WeatherForm";


function Weather() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const fetchWeather = async (cityName) => {
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=b06c5f09b6a64bb5a73123211240611&q=${cityName}&aqi=no`
      );
      if (!response.ok) {
        throw new Error("City not found");
      }
      const data = await response.json();
      setWeatherData(data);
      setError(null);
    } catch (error) {
      setError(error.message);
      setWeatherData(null);
    }
  };

  const handleCityChange = (e) => setCity(e.target.value);

  const handleSearch = () => {
    if (city.trim() !== "") {
      fetchWeather(city);
    }
  };

  return (
    <div className="weather-container animate__animated animate__fadeIn">
      <WeatherForm
        city={city}
        onCityChange={handleCityChange}
        onSearch={handleSearch}
      />
      {error && (
        <p className="error-message animate__animated animate__shakeX">
          {error}
        </p>
      )}
      {weatherData && (
        <div className="weather-info animate__animated animate__fadeInUp">
          <h2>{weatherData.location.name}</h2>
          <p>Temperature: {weatherData.current.temp_c}°C</p>
          <p>Weather: {weatherData.current.condition.text}</p>
          <p>Humidity: {weatherData.current.humidity}%</p>
        </div>
      )}
    </div>
  );
}

export default Weather;