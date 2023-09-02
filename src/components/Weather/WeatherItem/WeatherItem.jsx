import React from "react";

import "./WeatherItem.css";
import CloudsImage from "../../../assets/images/clouds.png";
import ClearImage from "../../../assets/images/clear.png";
import DrizzleImage from "../../../assets/images/drizzle.png";
import RainImage from "../../../assets/images/rain.png";
import MistImage from "../../../assets/images/mist.png";
import Humidity from "../../../assets/images/humidity.png";
import Wind from "../../../assets/images/wind.png";

const weatherIcons = {
  Clouds: CloudsImage,
  Clear: ClearImage,
  Drizzle: DrizzleImage,
  Rain: RainImage,
  Mist: MistImage,
};

const WeatherItem = ({ weatherData }) => {
  console.log("weatherData", weatherData);
  const weatherIcon = weatherData?.weather?.[0]?.main || "Unknown";
  const WeatherImage = weatherIcons[weatherIcon] || "Unknown";

  return (
    <div>
      <div className="weather-item">
        <div className="weather-icon">
          <div className="weather-icon">
            <img src={WeatherImage} alt={weatherIcon} />
          </div>
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
