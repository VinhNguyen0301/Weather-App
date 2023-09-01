import React, { useState } from "react";

import Card from "../UI/Card";
import WeatherItem from "./WeatherItem/WeatherItem";

import "./Weather.css";

const Weather = (props) => {
  return (
    <div>
      <Card className="weather">
        <WeatherItem />
      </Card>
    </div>
  );
};

export default Weather;
