import React, { useState, useCallback } from "react";
import WeatherForm from "./WeatherForm";

const API_KEY = 'b06c5f09b6a64bb5a73123211240611';

function Weather() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchWeather = useCallback(async (cityName) => {
    if (!cityName) return;

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${cityName}&aqi=no`
      );

      if (!response.ok) {
        throw new Error("City not found or network error");
      }

      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      setError(error.message);
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  }, []);

  const handleCityChange = (e) => setCity(e.target.value);

  const handleSearch = () => {
    const trimmedCity = city.trim();
    if (trimmedCity) {
      fetchWeather(trimmedCity);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="weather-container">
      <WeatherForm
        city={city}
        onCityChange={handleCityChange}
        onSearch={handleSearch}
        onKeyPress={handleKeyPress}
      />

      {loading && <div className="loader">Loading...</div>}

      {error && (
        <div className="error-message">
          {error}
        </div>
      )}

      {weatherData && (
        <div className="weather-info">
          <div className="location-header">
            <h2>{weatherData.location.name}, {weatherData.location.country}</h2>
          </div>
          <div className="weather-details">
            <div className="temperature">
              <span className="temp-value">{weatherData.current.temp_c}°C</span>
              <img 
                src={`https:${weatherData.current.condition.icon}`} 
                alt={weatherData.current.condition.text}
                className="weather-icon"
              />
            </div>
            <div className="additional-details">
              <p>Condition: {weatherData.current.condition.text}</p>
              <p>Humidity: {weatherData.current.humidity}%</p>
              <p>Wind: {weatherData.current.wind_kph} km/h</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Weather;