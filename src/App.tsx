import "./App.css";
import Artists from "./Components/Artists";
import Tracks from "./Components/Tracks";

function App() {
  return (
    <div className="App">
      {/* <div className="buttons">
        <button onClick={}>All Time</button>
        <button onClick={}>6 Months</button>
        <button onClick={}>1 Month</button>
      </div> */}
      <Tracks />
      <Artists />
    </div>
  );
}

export default App;
