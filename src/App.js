
import './Footer.css'; // Import the Footer component

import React from "react";
import './App.css'; 
import './Weatherform.css';  
import Weather from "./Components/Weather";
import Footer from "./Components/Footer"; // Import Footer component

function App() {
  return (
    <div className="App">
      <div className="main-content">
        <h1 className="app-title">Weather App</h1>
        <Weather />
      </div>
      <Footer /> {/* Use Footer component */}
    </div>
  );
}

export default App;

