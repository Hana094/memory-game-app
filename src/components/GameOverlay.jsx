import { useEffect, useState, useContext } from "react";
import { GameContext } from "../hooks/UseGameContext";

export default function GameOverlay() {
  const [playerName, setPlayerName] = useState("");
  const [startGame, setStartGame] = useState(false);
  const { foundCards, cardData, reStart } = useContext(GameContext);
  const endGame = foundCards === cardData.length / 2;
  useEffect(() => {
    const storedName = localStorage.getItem("playerName");
    if (storedName) {
      setPlayerName(storedName);
      setStartGame(true);
    }
  }, []);
  function handleStart() {
    localStorage.setItem("playerName", playerName);
    reStart();
    setStartGame(true);
  }
  return (
    <>
      {(!startGame || endGame) && (
        <div className="overlay">
          <div className="overlay__content">
            {endGame ? (
              <>
                <h2>¡Felicidades, {playerName}! Completaste el juego !!!</h2>
                <button onClick={handleStart}>Volver a jugar</button>
              </>
            ) : (
              <>
                <h2>¡Bienvenid@!</h2>
                <label htmlFor="player-name">
                  Por favor, introduce tu nombre:
                </label>
                <input
                  type="text"
                  id="player-name"
                  value={playerName}
                  onChange={(e) => setPlayerName(e.target.value)}
                  placeholder="Tu nombre"
                />
                <button onClick={handleStart}>Iniciar Juego</button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
