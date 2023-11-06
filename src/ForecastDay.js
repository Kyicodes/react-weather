import React from "react";
import "bootstrap/dist/css/bootstrap.css";

export default function ForecastDay(props) {
  function maxTemperature() {
    let temp = Math.round(props.data.temperature.maximum);
    return `${temp}°`;
  }

  function minTemperature() {
    let temp = Math.round(props.data.temperature.minimum);
    return `${temp}°`;
  }

  function Day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

    return days[day];
  }

  return (
    <div className="Card">
      <div className="card-body">
        <h5 className="card-title pt-2">{Day()}</h5>
        <h6 className="card-subtitle mb-2 text-body-secondary">
          <img id="icon" src={props.data.condition.icon_url} alt="" />
        </h6>
        <p className="card-text">
          <span className="minTemp">{minTemperature()}</span> | {""}
          <span className="maxTemp opacity-75">{maxTemperature()}</span>
        </p>
      </div>
    </div>
  );
}
