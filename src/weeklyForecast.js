import React from "react";

import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";

export default function weeklyForecast() {
  return (
    <div className="forecastContainer">
      <div className="row">
        <div className="col-md">
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <h6 className="card-subtitle mb-2 text-body-secondary">
                Card subtitle
              </h6>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
