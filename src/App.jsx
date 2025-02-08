import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [songs, setSongs] = useState([]);
  const [searchValue, setSearchValue] = useState("world");

  useEffect(() => {
    fetchSongs();
  }, []);

  const fetchSongs = () => {
    const url = `https://itunes.apple.com/search?term=${searchValue}&limit=25`;
    fetch(`${url}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setSongs(data.results.filter((song) => song.kind == "song"));
      })
      .catch((error) => console.error("Error fetching songs", error));
  };

  const playSong = (src) => {
    console.log(src);
    const audio = new Audio(src);
    audio.play();
  };

  return (
    <>
      <div className="title">
        <header>
          <h1>Music Finder</h1>
        </header>
      </div>
      <div className="search-results">
        <input type="text" onChange={(e) => setSearchValue(e.target.value)} />
        <button id="search-btn" onClick={fetchSongs}>
          Search
        </button>
      </div>
      <div className="main-content">
        <div className="music-cards">
          {songs.map((song) => (
            <div key={song.trackId} className="card">
              <h3>{song.trackName}</h3>
              <h3>{song.artistName}</h3>
              <button onClick={() => playSong(song.previewUrl)}>Play</button>
              <audio src={song.previewUrl} muted controls></audio>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
