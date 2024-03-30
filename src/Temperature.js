import React from "react";
import "./App.css";

export default function Temperature() {
  return (
    <div className="row">
      <div id="icon" className="current-temperature-icon">
        🌥
      </div>
      <div className="current-temperature-value" id="temperature">
        12
      </div>
      <div className="current-temperature-unit">℃</div>
    </div>
  );
}
