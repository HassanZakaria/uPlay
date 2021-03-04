import { useEffect, useState } from "react";
import "./App.css";

const queryString = require("query-string");

function App() {
  const [tracks, setTracks] = useState([]);
  const [artists, setArtists] = useState([]);

  let parsed = queryString.parse(window.location.search);
  let accessToken = parsed.access_token;

  const getTracks = async () => {
    const response = await fetch(
      "https://api.spotify.com/v1/me/top/tracks?time_range=medium_term",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    const data = await response.json();
    setTracks(data.items);
  };
  const getArtists = async () => {
    const response = await fetch(
      "https://api.spotify.com/v1/me/top/artists?time_range=medium_term",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    const data = await response.json();
    console.log(data);
    setArtists(data.items);
  };
  useEffect(() => {
    getTracks();
    getArtists();
  }, []);

  return (
    <div className="App">
      <div>
        Top Tracks:
        {tracks.map((track: any) => {
          return (
            <ol>
              <img src={track.album.images[2].url} alt="track" />
              {track.artists[0].name} : {track.name}
            </ol>
          );
        })}
      </div>
      <div>
        Top Artists:
        {artists.map((artist: any) => {
          return (
            <ol>
              <img
                src={artist.images[2].url}
                alt="track"
                height="64"
                width="64"
              />
              {artist.name}
            </ol>
          );
        })}
      </div>
    </div>
  );
}

export default App;
