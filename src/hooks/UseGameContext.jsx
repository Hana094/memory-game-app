import React, { createContext, ReactNode, useState, useEffect } from "react";
import * as Constants from "../utils/Constants";

export const GameContext = createContext(null);

export default function UseGameContext({ children }) {
  const [cardData, setCardData] = useState([]);
  const [pair, setPair] = useState([]);
  const [foundCards, setFoundCards] = useState([]);
  const [errors, setErrors] = useState(0);

  function shuffleDeck(deck) {
    for (let i = deck.length - 1; i > -1; i--) {
      const random = Math.floor(Math.random() * i + 1);

      [deck[i], deck[random]] = [deck[random], deck[i]];
    }

    setCardData(deck);
  }
  useEffect(() => {
    async function fetchGameData() {
      try {
        const response = await fetch(Constants.GAME_URL);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
        const data = await response.json();
        const cards = data?.entries.map((card) => {
          const cardData = card.fields.image;
          return {
            name: cardData.title,
            imgRef: cardData.url,
            uuid: cardData.uuid,
            reveal: false,
            matched: false,
          };
        });
        console.log(cards);

        const fullDeck = cards.flatMap((card) => {
          return [card, { ...card, uuid: card.uuid + "copy" }];
        });

        shuffleDeck(fullDeck);
      } catch (error) {
        throw new error("Couldn't load the gameData");
      }
    }
    fetchGameData();
  }, []);

  function tryMatch(cardIndex) {
    if (pair.length < 1) {
      pair.push(cardData[cardIndex]);
    }
    const updatedDeck = cardData.map((card, index) => {
      if (index === cardIndex) {
        return { ...card, reveal: true };
      }
      return card;
    });

    setCardData(updatedDeck);
  }
  return (
    <GameContext.Provider value={{ cardData, foundCards, errors, tryMatch }}>
      {children}
    </GameContext.Provider>
  );
}
