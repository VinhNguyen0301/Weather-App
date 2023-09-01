import React from "react";

import "./WeatherItem.css";
import Rain from "../../../assets/images/rain.png";
import Humidity from "../../../assets/images/humidity.png";
import Wind from "../../../assets/images/wind.png";

const WeatherItem = ({ weatherData }) => {
  return (
    <div>
      <div className="weather-item">
        <div className="weather-icon">
          <img src={Rain} alt="Rain" />
        </div>
        <div className="temp temp-detail">
          {Math.round(weatherData?.main?.temp)}℃
        </div>
        <div className="city temp-detail">{weatherData?.name}</div>

        <div className="info-detail">
          <div className="col">
            <img src={Humidity} alt="Humidity" className="humidity-img" />
            <div>
              <div className="humidity">{weatherData?.main?.humidity}%</div>
              <div>Humidity</div>
            </div>
          </div>
          <div className="col">
            <img src={Wind} alt="Wind" className="wind-img" />
            <div>
              <div className="humidity">{weatherData?.wind?.speed} km/h</div>
              <div>Wind Speed</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherItem;
