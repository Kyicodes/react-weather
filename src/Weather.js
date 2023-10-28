import React from "react";
import "./styles.css";

export default function Weather() {
  return (
    <div className="Display">
      <p className="Description">Sunny</p>
      <img
        id="icon"
        src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png"
        alt=""
        className="float-left"
      />
      <ul>
        <li id="wind-speed">wind: 11</li>
        <li id="humidity">Humidity: 75%</li>
      </ul>
      <div className="weatherNow">
        <h1 className="cityDisplay" id="city">
          Detroit 🌡
        </h1>
        <span className="Temp">85</span>
        <span className="Convert" id="convert">
          {" "}
          °F{" "}
        </span>
        <p className="dateText" id="date">
          Thursday July 27, 2023
        </p>
      </div>
      <div className="weatherForecast" id="forecast"></div>
    </div>
  );
}
