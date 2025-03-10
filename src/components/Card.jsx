import { useContext } from "react";
import { GameContext } from "../hooks/UseGameContext";

export default function Card({ cardData, index }) {
  const { tryMatch } = useContext(GameContext);
  function handleClick() {
    tryMatch(index);
  }
  return (
    <div
      className={`card ${cardData.reveal ? "flipped" : ""}`}
      onClick={handleClick}
    >
      <div className="card-front">
        <img src={cardData.imgRef} alt="card" />
      </div>
      <div className="card-back">?</div>
    </div>
  );
}
