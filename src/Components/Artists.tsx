interface Props {
  artists: never[];
}

const Artists: React.FC<Props> = ({ artists }) => {
  return (
    <div className="artists">
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
  );
};
export default Artists;
