// src/App.js
import React from "react";
import "./App.css";
import Weather from "./Components/Weather";
/* src/WeatherForm.css */
import "./Weather.css";



function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <Weather />
    </div>
  );
}

export default App;
