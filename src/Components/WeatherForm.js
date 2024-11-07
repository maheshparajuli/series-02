
import React from "react";


function WeatherForm({ city, onCityChange, onSearch }) {
  return (
    <div className="weather-form animate__animated animate__fadeIn">
      <input
        type="text"
        value={city}
        onChange={onCityChange}
        placeholder="Enter city name"
        className="animate__animated animate__pulse"
      />
      <button onClick={onSearch} className="animate__animated animate__bounce">
        Search
      </button>
    </div>
  );
}

export default WeatherForm;