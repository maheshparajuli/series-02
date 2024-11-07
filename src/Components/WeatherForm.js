import React from "react";
import { Sun, Cloud, CloudRain, CloudSnow } from "lucide-react";

const WeatherForm = ({ city, weather, onCityChange, onSearch }) => {
  const getWeatherIcon = () => {
    switch (weather) {
      case "sunny":
        return <Sun className="w-16 h-16 text-yellow-500" />;
      case "cloudy":
        return <Cloud className="w-16 h-16 text-gray-500" />;
      case "rainy":
        return <CloudRain className="w-16 h-16 text-blue-500" />;
      case "snowy":
        return <CloudSnow className="w-16 h-16 text-white" />;
      default:
        return null;
    }
  };

  return (
    <div
      className="weather-form animate__animated animate__fadeIn"
      style={{
        backgroundImage: "url('/weather-background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "300px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
      }}
    >
      {getWeatherIcon()}
      <input
        type="text"
        value={city}
        onChange={onCityChange}
        placeholder="Enter city name"
        className="animate__animated animate__pulse p-4 rounded-md shadow-md bg-white/50 focus:bg-white/75 text-gray-800 w-full max-w-md"
      />
      <button
        onClick={onSearch}
        className="animate__animated animate__bounce mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded shadow-md"
      >
        Search
      </button>
    </div>
  );
};

export default WeatherForm;