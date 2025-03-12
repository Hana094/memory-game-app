import React, { createContext, useCallback, useState, useEffect } from "react";
import * as Constants from "../utils/Constants";

export const GameContext = createContext(null);

export default function UseGameContext({ children }) {
  const [cardData, setCardData] = useState([]);
  const [pair, setPair] = useState([]);
  const [foundCards, setFoundCards] = useState(0);
  const [errors, setErrors] = useState(0);
  function reStart() {
    setPair([]);
    setFoundCards(0);
    setErrors(0);
    shuffleDeck(
      cardData.map((card) => {
        return { ...card, reveal: false, matched: false };
      })
    );
  }

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

  const tryMatch = useCallback((cardIndex) => {
    setCardData((prevCardData) =>
      prevCardData.map((card, index) =>
        index === cardIndex ? { ...card, reveal: true } : card
      )
    );

    setPair((prevPair) => {
      const newPair = [...prevPair, cardIndex];

      if (newPair.length === 2) {
        const [firstIndex, secondIndex] = newPair;

        setCardData((prevCardData) => {
          const firstCard = prevCardData[firstIndex];
          const secondCard = prevCardData[secondIndex];

          if (firstCard.name === secondCard.name) {
            setFoundCards((prevFoundCards) => {
              return (prevFoundCards || 0) + 1;
            });
            return prevCardData.map((card, index) => {
              if (index === firstIndex || index === secondIndex) {
                return { ...card, matched: true };
              }
              return card;
            });
          } else {
            setErrors((prevErrors) => {
              return (prevErrors || 0) + 1;
            });
            setTimeout(() => {
              setCardData((prev) =>
                prev.map((card, index) => {
                  if (index === firstIndex || index === secondIndex) {
                    return { ...card, reveal: false };
                  }
                  return card;
                })
              );
            }, 1000);
            return prevCardData;
          }
        });

        return [];
      }

      return newPair;
    });
  }, []);
  return (
    <GameContext.Provider
      value={{ cardData, foundCards, errors, pair, tryMatch, reStart }}
    >
      {children}
    </GameContext.Provider>
  );
}
