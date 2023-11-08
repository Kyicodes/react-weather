import React from "react";

import "./styles.css";

export default function FormattedDate(props) {
  let hours = props.date.getHours();
  if (hours < 10) {
    hours = `0 ${hours}`;
  }
  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednsday",
    "Thusday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.date.getDay()];

  return (
    <div>
      {day} {hours}:{minutes}
    </div>
  );
}
