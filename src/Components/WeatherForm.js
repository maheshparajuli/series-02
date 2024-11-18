import React from "react";
import { Sun, Cloud, CloudRain, CloudSnow } from "lucide-react";

const WeatherForm = ({ city, weather, onCityChange, onSearch }) => {
  const getWeatherIcon = () => {
    switch (weather) {
      case "sunny":
        return <Sun className="weather-icon sun-icon" />;
      case "cloudy":
        return <Cloud className="weather-icon cloudy-icon" />;
      case "rainy":
        return <CloudRain className="weather-icon rain-icon" />;
      case "snowy":
        return <CloudSnow className="weather-icon snow-icon" />;
      default:
        return null; 
    }
  };

  return (
    <div className="weather-form">
      {getWeatherIcon()}
      <input
        type="text"
        value={city}
        onChange={onCityChange}
        placeholder="Enter city name"
        className="weather-input"
      />
      <button onClick={onSearch} className="search-button">
        Search
      </button>
    </div>
  );
};

export default WeatherForm;
