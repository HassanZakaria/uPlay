import { CircularProgress } from "@material-ui/core";
import { useState } from "react";
import useFetch from "../useFetch";

const Tracks: React.FC = () => {
  const [timeRange, setTimeRange] = useState("long_term");
  const { isLoading, response: tracks, error } = useFetch(
    `https://api.spotify.com/v1/me/top/tracks?time_range=${timeRange}`
  );

  return (
    <div className="tracks">
      Top Tracks:
      <button onClick={() => setTimeRange("long_term")}>AllTime</button>
      <button onClick={() => setTimeRange("medium_term")}>Six Months</button>
      <button onClick={() => setTimeRange("short_term")}>One Month</button>
      {isLoading ? (
        <CircularProgress />
      ) : (
        tracks.map((track: any) => {
          return (
            <ol>
              <img src={track.album.images[2].url} alt="track" />
              {track.artists[0].name} : {track.name}
            </ol>
          );
        })
      )}
    </div>
  );
};
export default Tracks;
