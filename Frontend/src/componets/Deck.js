import React from "react";
import { Link } from "react-router-dom";
import './Deck.css'
export default function Deck(P) {

    const { deck } = P 



    return (
      <React.Fragment>

        <div className="cardd">
    <Link to={`/mydecks/${deck._id}`}> 
    <div className="medium"><img src={deck.Deck_img} alt="Picture" ></img></div>
  </Link>
  <div className="card-body">
  <h2>{deck.Deck_Name}</h2>
  <button> </button>
</div>
</div>
</React.Fragment>

)
}