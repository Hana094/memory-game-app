import { useContext } from "react";
import { GameContext } from "../hooks/UseGameContext";
import Card from "./Card";
import Score from "./Score";

export default function GameBoard() {
  const { cardData, pair, tryMatch } = useContext(GameContext);
  return (
    <div className="game-board-container">
      <Score />
      <div className="game-board">
        {cardData.length &&
          cardData.map((card, index) => {
            return (
              <Card
                cardData={card}
                key={card.uuid + index}
                index={index}
                tryMatch={tryMatch}
                pair={pair}
              />
            );
          })}
      </div>
    </div>
  );
}
