import { useContext } from "react";
import { GameContext } from "../hooks/UseGameContext";
import Card from "./Card";
import Score from "./Score";

export default function GameBoard() {
  const { cardData, tryMatch } = useContext(GameContext);
  return (
    <>
      <Score />
      <div className="game-board">
        {cardData.length > 0 &&
          cardData.map((card, index) => {
            return (
              <Card
                cardImg={card.imgRef}
                reveal={card.reveal}
                matched={card.matched}
                key={card.uuid + index}
                index={index}
                tryMatch={tryMatch}
              />
            );
          })}
      </div>
    </>
  );
}
