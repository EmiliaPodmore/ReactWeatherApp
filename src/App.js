import React from "react";
import "./App.css";
import Form from "./Form";
import City from "./City";
import Time from "./Time";
import Wind from "./Wind";
import Humidity from "./Humidity";
import Temperature from "./Temperature";
import Description from "./Description";

export default function App() {
  return (
    <div className="App">
      <div className="weather-app">
        <Form />
        <main>
          <div className="weather-app-data">
            <div>
              <City />
              <Time />
              <br />
              <Humidity />
              <br />
              <Wind />
            </div>
            <div className="current-temperature-container">
              <Temperature />
              <div>
                <br />
                <Description />
              </div>
            </div>
          </div>
        </main>
        <footer>
          This project was coded by {""}
          <a
            href="https://github.com/EmiliaPodmore"
            target="_blank"
            rel="noreferrer"
          >
            Emilia Podmore
          </a>
          , it is {""}
          <a
            href="https://github.com/EmiliaPodmore/ReactWeatherApp"
            target="_blank"
            rel="noreferrer"
          >
            {""}open-sourced on GitHub {""}
          </a>
          and hosted on Netlify
        </footer>
      </div>
    </div>
  );
}
