import React, { useState } from "react";

import "./styles.css";
import { ThreeDots } from "react-loader-spinner";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import FormattedDate from "./formattedDate";
import WeeklyForecast from "./weeklyForecast";

export default function Weather(props) {
  let [city, setCity] = useState("");
  let [weather, setWeather] = useState({});
  let [loaded, setLoaded] = useState("");

  function weatherDisplay(response) {
    setLoaded(true);
    setWeather({
      coordinates: response.data.coordinates,
      temp: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      description: response.data.condition.description,
      icon: response.data.condition.icon_url,
      date: new Date(response.data.time * 1000),
    });
  }

  function Submit(event) {
    event.preventDefault();
    let key = "55ea3bd4ftf0bf63c7f231oa6c374c08";
    let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${key}&units=imperial`;
    axios.get(url).then(weatherDisplay);
  }

  function cityUpdate(event) {
    setCity(event.target.value);
  }

  let searchForm = (
    <div className="Search">
      <form id="change-city" onSubmit={Submit}>
        <input
          type="search"
          placeholder="Change city..."
          id="search-bar"
          autocomplete="off"
          onChange={cityUpdate}
        />
        <input type="submit" value="🔎" />
      </form>
    </div>
  );

  if (loaded) {
    return (
      <div>
        {searchForm}
        <div className="daily-forecast">
          <img id="icon" src={weather.icon} alt="" className="float-start" />
          <span className="float-start mt-4">{weather.description}</span>
          <ul>
            <li className="text-end mt-5">wind: {Math.round(weather.wind)}</li>
            <li className="text-end">Humidity: {weather.humidity}</li>
          </ul>
          <div className="weatherNow">
            <h1 className="cityDisplay text-capitalize" id="city">
              {city}🌡
            </h1>
            <span className="Temp"> {Math.round(weather.temp)}</span>
            <span> °F </span>
            <p className="dateText" id="date">
              <FormattedDate date={weather.date} />
            </p>
          </div>
          <div className="weeklyForecast" id="forecast">
            <WeeklyForecast coordinates={weather.coordinates} />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        {searchForm}
        <div className="Loader">
          <ThreeDots
            height="100"
            width="100"
            radius="9"
            color="#71a0a5"
            ariaLabel="loading"
            wrapperStyle
            wrapperClass
          />
        </div>
      </div>
    );
  }
}
