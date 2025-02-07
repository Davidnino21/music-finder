import { useState, useEffect } from "react";
import "./App.css";
const url = "https://itunes.apple.com/search?term=jack+johnson&limit=25";

function App() {
  const [songs, setSongs] = useState([]);
  const [searchSong, setSearchSong] = useState([])

  useEffect(() => {
    fetch(`${url}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setSongs(data.results.filter((song) => song.kind == "song"));
      })
      .catch((error) => console.error("Error fetching songs", error));
  }, []);



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
          {songs.map((song) => (
            <div key={song.trackId} className="card">
              <h3>{song.trackName}</h3>
              <h3>{song.artistName}</h3>
              <button>Play</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
