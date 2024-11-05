// src/components/WeatherForm.js
import React from "react";

function WeatherForm({ city, onCityChange, onSearch }) {
  return (
    <div className="weather-form">
      <input
        type="text"
        value={city}
        onChange={onCityChange}
        placeholder="Enter city name"
      />
      <button onClick={onSearch}>Search</button>
    </div>
  );
}

export default WeatherForm;
