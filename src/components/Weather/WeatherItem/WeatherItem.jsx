import React from "react";

import "./WeatherItem.css";
import Card from "../../UI/Card";
import Rain from "../../../assets/images/rain.png";
import Humidity from "../../../assets/images/humidity.png";
import Wind from "../../../assets/images/wind.png";

const WeatherItem = (props) => {
  return (
    <Card>
      <div className="weather-item">
        <div className="weather-icon">
          <img src={Rain} alt="Rain" />
        </div>
        <div className="temp temp-detail">22</div>
        <div className="city temp-detail">New york</div>

        <div className="info-detail">
          <div className="col">
            <img src={Humidity} alt="Humidity" className="humidity-img" />
            <div>
              <div className="humidity">50%</div>
              <div>Humidity</div>
            </div>
          </div>
          <div className="col">
            <img src={Wind} alt="Wind" className="wind-img" />
            <div>
              <div className="humidity">1.85 km/h</div>
              <div>Wind Speed</div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default WeatherItem;
