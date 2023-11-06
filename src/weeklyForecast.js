import React, { useState } from "react";
import axios from "axios";

import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";

export default function WeeklyForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  function minTemp() {
    let min = Math.round(props.data.temperature.minimum);
    return `${min}°`;
  }

  function maxTemp(props) {
    let max = Math.round(props.data.temperature.maximum);
    return `${max}°`;
  }

  function day(timestamp) {
    let date = new Date(timestamp * 1000);
    let day = date.getDay();
    let days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

    return days[day];
  }

  if (loaded) {
    return (
      <div className="forecastContainer">
        <div className="row">
          <div className="col-md">
            <div className="card">
              <div className="card-body">
                <WeeklyForecast data={forecast[0]} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let key = "55ea3bd4ftf0bf63c7f231oa6c374c08";
    let lon = props.coordinates.longitude;
    let lat = props.coordinates.latitude;
    let url = `https://api.shecodes.io/weather/v1/current?lon=${lon}&lat=${lat}&key=${key}&units=imperial`;
    axios.get(url).then(handleResponse);

    return null;
  }
}
