interface Props {
  tracks: never[];
}

const Tracks: React.FC<Props> = ({ tracks }) => {
  return (
    <div className="artists">
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
  );
};
export default Tracks;
