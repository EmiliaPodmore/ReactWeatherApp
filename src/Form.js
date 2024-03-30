import React from "react";
import "./App.css";

export default function Form() {
  return (
    <div className="header">
      <div class="weather-app">
        <header>
          <form class="search-form" id="search-form">
            <input
              type="search"
              placeholder="Enter a city..."
              required
              id="search-input"
              class="search-input"
            />
            <input type="submit" value="Search" class="search-button" />
          </form>
        </header>
      </div>
    </div>
  );
}
