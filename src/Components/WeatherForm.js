import React, { useState } from "react";
import { 
  Sun, 
  Cloud, 
  CloudRain, 
  CloudSnow, 
  Wind, 
  Thermometer, 
  Droplets, 
   
} from "lucide-react";

const WeatherForm = ({ 
  city, 
  weather, 
  onCityChange, 
  onSearch, 
  temperature, 
  humidity, 
  windSpeed 
}) => {
  const [isFavorite, setIsFavorite] = useState(false);

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
        return <Cloud className="weather-icon default-icon" />;
    }
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    // You could add logic to save favorite cities
  };

  return (
    <div className="weather-form-container">
      <div className="weather-header">
        <div className="weather-icon-container">
          {getWeatherIcon()}
        </div>
        <div className="city-search-container">
          <div className="search-wrapper">
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
            <button 
              onClick={toggleFavorite} 
              className={`favorite-button ${isFavorite ? 'favorited' : ''}`}
            >
              {isFavorite ? '★' : '☆'}
            </button>
          </div>
        </div>
      </div>

      {(temperature || humidity || windSpeed) && (
        <div className="weather-details">
          {temperature && (
            <div className="detail-item">
              <Thermometer className="detail-icon" />
              <span>{temperature}°C</span>
            </div>
          )}
          {humidity && (
            <div className="detail-item">
              <Droplets className="detail-icon" />
              <span>{humidity}%</span>
            </div>
          )}
          {windSpeed && (
            <div className="detail-item">
              <Wind className="detail-icon" />
              <span>{windSpeed} km/h</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default WeatherForm;