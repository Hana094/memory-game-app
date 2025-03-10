import { useContext } from "react";
import { GameContext } from "../hooks/UseGameContext";
import Card from "./Card";

export default function GameBoard() {
  const { cardData } = useContext(GameContext);
  return (
    <>
      {cardData.length > 0 &&
        cardData.map((card, index) => {
          return <Card cardData={card} key={card.uuid + index} index={index} />;
        })}
    </>
  );
}
