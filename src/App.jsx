import "./App.css";
import GameBoard from "./components/GameBoard";
import UseGameContext from "./hooks/UseGameContext";

function App() {
  return (
    <UseGameContext>
      <GameBoard />
    </UseGameContext>
  );
}

export default App;
