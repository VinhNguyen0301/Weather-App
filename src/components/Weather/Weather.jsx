import React, { useEffect, useState } from "react";

import Card from "../UI/Card";
import WeatherItem from "./WeatherItem/WeatherItem";

import "./Weather.css";
import Search from "./Search/Search";

const Weather = (props) => {
  const [weatherData, setWeatherData] = useState({})
  const apiKey = "5c8a89b7f3f21acf674f93dd5ac8d9a7";
  const apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?units=metric&q=sydney";

  const checkWeather = async () => {
    const response = await fetch(apiUrl + `&appid=${apiKey}`);
    let data = await response.json();
    setWeatherData(data);
    console.log("data", data);
  };

  useEffect(() => {
    checkWeather();
  }, []);

  return (
    <div className="weather">
      <Card className="weather-background">
        <div className="search-component">
          <Search />
        </div>
        <WeatherItem weatherData={weatherData}/>
      </Card>
    </div>
  );
};

export default Weather;
