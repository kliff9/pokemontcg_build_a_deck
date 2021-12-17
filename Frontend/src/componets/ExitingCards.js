import "./ExistingCard.css";
import { Link, useParams } from "react-router-dom";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddtoDeck, listDecks } from "../Actions/DeckActions";


export default function ExistingCard(P) {
  const { Pokemon } = P;

  const dispatch = useDispatch();

  const deckList = useSelector((state) => state.deckList);
  const { decks } = deckList;

  useEffect(() => {
    dispatch(listDecks());
  }, []);

  const params = useParams();
  const { id: cardId } = params;
  console.log('cardId: ', cardId)

  console.log('Pokemon._id: ', Pokemon._id)




  useEffect(() => {
    if (cardId) {
      dispatch(AddtoDeck(cardId));
    }
  }, [dispatch, cardId]);

  return (
    <React.Fragment>
      <div key={Pokemon._id} className="Card_Div">
        <Link to={`/cards/${Pokemon._id}`}>
          <img src={Pokemon.image} alt="Picture" className="bouder dim"></img>
        </Link>

        <div className="Name_Background">
          {Pokemon.name}
          <img
            src={`/img/type_${Pokemon.type}.png`}
            alt="Picture"
            className="energy energy_sizeTop"
          ></img>
        </div>

        <div className="move1">
          {Pokemon.energy.map((Energy) => (
            <img
              src={`/img/type_${Energy}.png`}
              alt="Picture"
              className="energy_move energy_size"
            ></img>
          ))}
          <h5 className="Move_Name"> Zapper Strike {Pokemon.MoveName}</h5>
          <h5 className="MoveDamage"> 70 {Pokemon.Damage}</h5>
          <p className="MoveDescription">
            {Pokemon.Move_Description}This Attack does Something you may not
            think it dose nothing.
          </p>
        </div>
        <button
        onClick={AddtoDeck(Pokemon._id)}>Add</button>
      </div>
    </React.Fragment>
  );
}
