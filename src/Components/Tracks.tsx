import { CircularProgress } from "@material-ui/core";
import { useState } from "react";
import useGetData from "../useFetch";

const Tracks: React.FC = () => {
  const [timeRange, setTimeRange] = useState("long_term");
  const { isLoading, response: tracks, error } = useGetData(
    `https://api.spotify.com/v1/me/top/tracks?time_range=${timeRange}`
  );

  return (
    <div className="tracks">
      Top Tracks:
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
