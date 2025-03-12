import "./App.css";
import GameBoard from "./components/GameBoard";
import GameOverlay from "./components/GameOverlay";
import UseGameContext from "./hooks/UseGameContext";

function App() {
  return (
    <UseGameContext>
      <GameOverlay />
      <GameBoard />
    </UseGameContext>
  );
}

export default App;
