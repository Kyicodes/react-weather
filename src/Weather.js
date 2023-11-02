import React, { useState } from "react";

import "./styles.css";
import axios from "axios";

export default function Weather() {
  let [city, setCity] = useState("");
  let [weather, setWeather] = useState({});
  let [loaded, setLoaded] = useState(false);

  function weatherDisplay(response) {
    setLoaded(true);
    setWeather({
      temp: response.data.main.temp,
      humdity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
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
          placeholder="change city "
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
        <div className="Display">
          <p className="Description">Sunny</p>
          <img
            id="icon"
            src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png"
            alt=""
            className="float-left"
          />
          <ul>
            <li id="wind-speed">wind: {weather.speed}</li>
            <li id="humidity">Humidity: {weather.humidity}</li>
          </ul>
          <div className="weatherNow">
            <h1 className="cityDisplay" id="city">
              {city}🌡
            </h1>
            <span className="Temp"> {Math.round(Weather.temp)}</span>
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
      </div>
    );
  } else {
    return searchForm;
  }
}
