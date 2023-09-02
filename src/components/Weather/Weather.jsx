import React, { useEffect, useState } from "react";

import Card from "../UI/Card";
import WeatherItem from "./WeatherItem/WeatherItem";

import "./Weather.css";
import Search from "./Search/Search";

const Weather = () => {
  const [weatherData, setWeatherData] = useState({});
  const [error, setError] = useState(null);

  const checkWeather = async (cityQuery) => {
    try {
      const cityQueryDefault = cityQuery || "Sydney";
      const apiKey = import.meta.env.VITE_API_KEY;
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&appid=${apiKey}&q=${cityQueryDefault}`;

      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error("API request failed");
      }

      let data = await response.json();
      setWeatherData(data);
      setError(null); // Clear any previous errors
    } catch (error) {
      setError("Error fetching weather data. Please try again.");
      console.error("Error fetching weather data:", error);
    }
  };

  useEffect(() => {
    checkWeather();
  }, []);

  return (
    <div className="weather">
      <Card className="weather-background">
        <div className="search-component">
          <Search onSearchCity={checkWeather} />
        </div>
        {error ? (
          <div className="error-message">Invalid city name</div>
        ) : (
          <WeatherItem weatherData={weatherData} />
        )}
      </Card>
    </div>
  );
};

export default Weather;
