import React from "react";
import { GameContext } from "../hooks/UseGameContext";

const Card = React.memo(({ cardImg, reveal, matched, index, tryMatch }) => {
  function handleClick() {
    tryMatch(index);
  }
  console.log("MyComponent re-rendered!" + index);
  return (
    <div className={`card ${reveal ? "flipped" : ""}`} onClick={handleClick}>
      <div className="card-front">
        <img src={cardImg} alt="card" />
      </div>
      <div className="card-back">?</div>
    </div>
  );
});

export default Card;
