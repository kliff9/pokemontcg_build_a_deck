import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { Hourglass } from "react-spinners-css";
import { listDecks } from "../Actions/DeckActions";
import Deck from "../componets/Deck";
import MessageBox from "../componets/MessageBox";

export default function place() {
  const deckList = useSelector((state) => state.deckList);
  const { loading, decks, error } = deckList;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listDecks());
  }, []);

  return (
    <React.Fragment>
      {loading ? (
        <Hourglass color="purple" />
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div className="">         
        {decks.Cards.map((deck) => (            
          <Deck key={deck._id} deck={deck}> </Deck> ))        

      }
            </div>
      )}
    </React.Fragment>
    
  ); // end of return
}