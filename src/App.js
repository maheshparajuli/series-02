import React from "react";
import './App.css'; 
import './Weatherform.css';  
import Weather from "./Components/Weather";

function App() {
  return (
    <div className="App">
      <h1 className="app-title">Weather App</h1>
      <Weather />
    </div>
  );
}

export default App;
