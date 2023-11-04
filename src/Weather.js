import React, { useState } from "react";

import "./styles.css";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import FormattedDate from "./formattedDate";
import weeklyForecast from "./weeklyForecast";

export default function Weather() {
  let [city, setCity] = useState("");
  let [weather, setWeather] = useState({});
  let [loaded, setLoaded] = useState(false);

  function weatherDisplay(response) {
    setLoaded(true);
    setWeather({
      temp: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
    });
  }

  function Submit(event) {
    event.preventDefault();
    let key = "8161b4309ee03faae957729ba7104797";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=imperial`;
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
          <img
            id="icon"
            src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png"
            alt=""
            className="float-start"
          />
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
            <span className="Convert" id="convert">
              {" "}
              °F{" "}
            </span>
            <p className="dateText" id="date">
              <FormattedDate date={weather.date} />
            </p>
          </div>
          <div className="weatherForecast" id="forecast">
            <weeklyForecast />
          </div>
        </div>
      </div>
    );
  } else {
    return searchForm;
  }
}
