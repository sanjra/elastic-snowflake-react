import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      {"  "}
      <h3>{props.data.country}</h3>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
      </ul>
      <div className="row mt-3">
        <div className="col-8">
          <div className="clearfix">
            <div className="float-left">
              <WeatherTemperature celsius={props.data.temperature} />
            </div>

            <div className="float-left">
              <WeatherIcon code={props.data.icon} size={52} />
            </div>
          </div>
        </div>

        <div className="col-4">
          <ul>
            <li className="text-capitalize">{props.data.description}</li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
