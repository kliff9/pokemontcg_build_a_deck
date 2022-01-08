import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { delete_deck } from "../Actions/DeckActions";
import "./Deck.css";
export default function Deck(P) {
  const { deck } = P;

  const dispatch = useDispatch();


  const deleteHandler = () => {

    if (window.confirm("Are you sure to delete?")) {
      dispatch(delete_deck(deck._id));
      window.location.reload(true);
    }
  };

  console.log("deck ID: ", deck._id);
  return (
    <React.Fragment>
      <div className="cardd">
        <Link to={`/mydecks/${deck._id}`}>
          <div className="medium">
            <img src={deck.Deck_img} alt="Picture"></img>
          </div>
        </Link>
        <div className="card-body">
          <h2>{deck.Deck_Name}</h2>
          <button
            className="btn btn-primary  btn-blockdelete btn-large"
            onClick={deleteHandler}
          >
            Delete
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}
