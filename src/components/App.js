import { ReactComponent as Robo } from "../assets/robo.svg";
import "./App.css";
import Chat from "./Chat";

function App() {
  return (
    <div
      className="App"
      style={
        {
          // background: `url("/wp.jpg")`,
          // backgroundSize: "cover",
          // backdropFilter: ""
        }
      }
    >
      <Chat />
      <div className="robo-container">
        <Robo />
      </div>
    </div>
  );
}

export default App;
