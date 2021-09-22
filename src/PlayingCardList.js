import React, { useEffect, useState } from "react";
import uuid from "uuid";
import axios from "axios";
import PlayingCard from "./PlayingCard";
import useAxios from "./hooks/useAxios";
import "./PlayingCardList.css";

/* Renders a list of playing cards.
 * Can also add a new card at random. */
function CardTable() {
  const [cards, setCards] = useState([]);

  const url = "https://deckofcardsapi.com/api/deck/new/draw/";
  const [newCardData, getCardData] = useAxios(null);

  useEffect(() => {
    if (newCardData) {
      setCards((cards) => {
        return [...cards, { ...newCardData.data, id: uuid() }];
      });
    }
  }, [newCardData]);

  return (
    <div className="PlayingCardList">
      <h3>Pick a card, any card!</h3>
      <div>
        <button onClick={()=>getCardData(url)}>Add a playing card!</button>
      </div>
      <div className="PlayingCardList-card-area">
        {cards.map(cardData => (
          <PlayingCard key={cardData.id} front={cardData.cards[0].image} />
        ))}
      </div>
    </div>
  );
}

CardTable.defaultProps = {};

export default CardTable;
