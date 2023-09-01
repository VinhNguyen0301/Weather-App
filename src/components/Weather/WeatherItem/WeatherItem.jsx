import React from "react";

import "./WeatherItem.css";
import Card from "../../UI/Card";
import Rain from "../../../assets/images/rain.png";

const WeatherItem = (props) => {
  return (
    <Card className="weather-item">
      <div>
        <img src={Rain} alt="Rain" className="weather-icon" />
        <div className="temp temp-detail">22</div>
        <div className="city temp-detail">New york</div>
        <div className="info-detail">
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </div>
      </div>
    </Card>
  );
};

export default WeatherItem;
