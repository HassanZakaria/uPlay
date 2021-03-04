import { useEffect, useState } from "react";
import "./App.css";
import Artists from "./Components/Artists";
import Tracks from "./Components/Tracks";

const queryString = require("query-string");

function App() {
  const [tracks, setTracks] = useState([]);
  const [artists, setArtists] = useState([]);

  let parsed = queryString.parse(window.location.search);
  let accessToken = parsed.access_token;

  const getAllTime = async () => {
    const response = await fetch(
      "https://api.spotify.com/v1/me/top/tracks?time_range=long_term",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    const data = await response.json();
    setTracks(data.items);
    const secondResponse = await fetch(
      "https://api.spotify.com/v1/me/top/artists?time_range=long_term",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    const secondData = await secondResponse.json();
    setArtists(secondData.items);
  };
  const getSixMonths = async () => {
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
    const secondResponse = await fetch(
      "https://api.spotify.com/v1/me/top/artists?time_range=medium_term",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    const secondData = await secondResponse.json();
    setArtists(secondData.items);
  };
  const getOneMonth = async () => {
    const response = await fetch(
      "https://api.spotify.com/v1/me/top/tracks?time_range=short_term",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    const data = await response.json();
    setTracks(data.items);
    const secondResponse = await fetch(
      "https://api.spotify.com/v1/me/top/artists?time_range=short_term",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    const secondData = await secondResponse.json();
    setArtists(secondData.items);
  };

  useEffect(() => {
    getAllTime();
    getSixMonths();
    getOneMonth();
  }, []);

  return (
    <div className="App">
      <button onClick={getAllTime}>All Time</button>
      <button onClick={getSixMonths}>6 Months</button>
      <button onClick={getOneMonth}>1 Month</button>
      <Tracks tracks={tracks} />
      <Artists artists={artists} />
    </div>
  );
}

export default App;
