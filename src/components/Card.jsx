import React from "react";

const Card = React.memo(
  ({ cardData, index, pair, tryMatch }) => {
    const { imgRef, reveal, matched } = cardData;
    function handleClick() {
      if (matched || pair.includes(index) || pair.length === 2) return;
      tryMatch(index);
    }
    return (
      <div
        className={`card ${reveal ? "card--flipped" : ""}`}
        onClick={handleClick}
      >
        <div className="card__front">
          <img src={imgRef} alt="card" />
        </div>
        <div className="card__back">?</div>
      </div>
    );
  },
  (prevProps, nextProps) => {
    return (
      prevProps.cardData.imgRef === nextProps.cardData.imgRef &&
      prevProps.cardData.reveal === nextProps.cardData.reveal &&
      prevProps.cardData.matched === nextProps.cardData.matched
    );
  }
);

export default Card;
