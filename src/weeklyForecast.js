import React, { useState } from "react";
import axios from "axios";

import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";
import ForecastDay from "./ForecastDay";

export default function WeeklyForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="forecastContainer">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index < 6) {
              return (
                <div className="col-md" key={index}>
                  {index}
                  <ForecastDay data={dailyForecast} />
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  } else {
    let key = "55ea3bd4ftf0bf63c7f231oa6c374c08";
    let lon = props.coordinates.longitude;
    let lat = props.coordinates.latitude;
    let url = `https://api.shecodes.io/weather/v1/forecast?lon=${lon}&lat=${lat}&key=${key}&units=imperial`;
    axios.get(url).then(handleResponse);

    return null;
  }
}
