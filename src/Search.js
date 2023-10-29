import React from "react";

export default function Search() {
  return (
    <div className="Search">
      <form id="change-city">
        <input
          type="search"
          placeholder="change city "
          id="search-bar"
          autocomplete="off"
        />
        <input type="submit" value="🔎" />
      </form>
      <button className="now btn btn-primary" id="current-location">
        Current
      </button>
    </div>
  );
}
