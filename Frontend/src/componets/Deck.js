import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { delete_deck } from "../Actions/DeckActions";
import './Deck.css'
export default function Deck(P) {

    const { deck } = P 

    const dispatch = useDispatch();

    // const deckdelete = useSelector((state) => state.deckdelete);

    const deleteHandler = () => {
      // dispatch(delete_deck(deck._id));

      if (window.confirm('Are you sure to delete?')) {
        dispatch(delete_deck(deck._id));
       }
    }

console.log('deck ID: ',  deck._id)
    return (
      <React.Fragment>

        <div className="cardd">
    <Link to={`/mydecks/${deck._id}`}> 
    <div className="medium"><img src={deck.Deck_img} alt="Picture" ></img></div>
  </Link>
  <div className="card-body">
  <h2>{deck.Deck_Name}</h2>
  <button onClick={deleteHandler}>Delete</button>
 {/* <Link to={`/mydecks/${deck._id}/post`}><button> post </button>
 </Link> */}
</div>
</div>
</React.Fragment>

)
    }