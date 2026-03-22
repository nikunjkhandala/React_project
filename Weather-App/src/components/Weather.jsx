import React, { useState } from "react";
import axios from "axios";

const Weather = () => {
  const [city, setCity] = useState();
  const [weather, setWeather] = useState();

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const fetchWeather = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${"508183e3206ca0eedabcea99f52f119b"}`,
      );
      setWeather(response);
    } catch (error) {
      console.log("error fetching", error);
    }
  };
  const handleClick = () => {
    fetchWeather();
  };

  return (
    <div className="weather-container">
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={handleCityChange}
      />

      <button onClick={handleClick}>Get Weather</button>
      {weather && (
        <>
          <div>
            <h3>{weather.data.name}</h3>
            <p>{weather.data.main.temp}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Weather;
