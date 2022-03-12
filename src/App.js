import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Melbourne" />
        <footer>
          <p>Sanjra created this application using React.</p>
          <p>
            {" "}
            <a
              className="App-link"
              href="https://github.com/sanjra/elastic-snowflake-react"
              target="_blank"
              rel="noopener noreferrer"
            >
              github link here.
            </a>{" "}
            <a
              className="App-link"
              href="https://compassionate-payne-4184c1.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Netify link here.
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}
