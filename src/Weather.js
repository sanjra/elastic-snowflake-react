import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          {" "}
          <div className="col-9">
            {" "}
            <input
              className="form-control"
              type="search"
              placeholder="Enter a City.."
            />
          </div>
          <div className="col-3">
            <input className="btn btn-dark" type="submit" value="Search" />
          </div>
        </div>
      </form>
      <h1>Sydney</h1>
      <h2>Australia</h2>
      <ul>
        <li>Wednesday 7:00am-datetime</li>
        <li>Mostly Cloudy-descript</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png"
            alt="Clear with Clouds"
          />
          18ºC
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 00%</li>
            <li>Humidity: 00%</li>
            <li>Wind: 00km/h</li>
          </ul>
        </div>
      </div>
      This is a Weather.js
    </div>
  );
}