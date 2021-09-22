import React from "react";
import PlayingCard from "./PlayingCard";
import useAxios from "./hooks/useAxios";
import "./PlayingCardList.css";

/* Renders a list of playing cards.
 * Can also add a new card at random. */
function CardTable() {
  const [cards, setCards, removeCards] = useAxios();
  const url = "https://deckofcardsapi.com/api/deck/new/draw/";

  const addCard = async (url) => { setCards(url) };
  return (
    <div className="PlayingCardList">
      <h3>Pick a card, any card!</h3>
      <div>
        <button onClick={() => addCard(url)}>Add a playing card!</button>
      </div>
      <div className="PlayingCardList-card-area">
        {cards.map((cardData) => (
          <PlayingCard key={cardData.id} front={cardData.cards[0].image} />
        ))}
      </div>
      <div>
        <button onClick={removeCards}>Remove playing cards!</button>
      </div>
    </div>
  );
}

CardTable.defaultProps = {};

export default CardTable;
