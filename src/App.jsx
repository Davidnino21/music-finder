import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <div className="title">
        <header>
          <h1>Music Finder</h1>
        </header>
      </div>
      <div className="search-results">
          <input type="text" />
          <button id="search-btn">Search</button>
      </div>
      <div className="main-content">
          <div className="music-cards">
            <div className="card">
              <h3>Song Title</h3>
              <h3>Artist Name</h3>
              <button>Play</button>
            </div>
            <div className="card">
              <h3>Song Title</h3>
              <h3>Artist Name</h3>
              <button>Play</button>
            </div>
            <div className="card">
              <h3>Song Title</h3>
              <h3>Artist Name</h3>
              <button>Play</button>
            </div>
            <div className="card">
              <h3>Song Title</h3>
              <h3>Artist Name</h3>
              <button>Play</button>
            </div>
            <div className="card">
              <h3>Song Title</h3>
              <h3>Artist Name</h3>
              <button>Play</button>
            </div>
            <div className="card">
              <h3>Song Title</h3>
              <h3>Artist Name</h3>
              <button>Play</button>
            </div>
            <div className="card">
              <h3>Song Title</h3>
              <h3>Artist Name</h3>
              <button>Play</button>
            </div>
            <div className="card">
              <h3>Song Title</h3>
              <h3>Artist Name</h3>
              <button>Play</button>
            </div>
          </div>
      </div>
    </>
  );
}

export default App;
