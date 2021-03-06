import { CircularProgress } from "@material-ui/core";
import { useState } from "react";
import useFetch from "../useFetch";

const Artists = () => {
  const [timeRange, setTimeRange] = useState("long_term");
  const { isLoading, response: artists, error } = useFetch(
    `https://api.spotify.com/v1/me/top/artists?time_range=${timeRange}`
  );
  return (
    <div className="artists">
      Top Artists:
      <button onClick={() => setTimeRange("long_term")}>AllTime</button>
      <button onClick={() => setTimeRange("medium_term")}>Six Months</button>
      <button onClick={() => setTimeRange("short_term")}>One Month</button>
      {isLoading ? (
        <CircularProgress />
      ) : (
        artists.map((artist: any) => {
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
        })
      )}
    </div>
  );
};
export default Artists;
