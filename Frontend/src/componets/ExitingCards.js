import "./ExistingCard.css";
import { Link } from "react-router-dom";
import React  from "react";
import { useDispatch } from "react-redux";
import { removeFromDeck } from "../Actions/DeckActions";



export default function ExistingCard(P) {
  const { Pokemon } = P;

  
  const dispatch = useDispatch();


  const delete_card_handler = () => {
    console.log('removed')
      dispatch(removeFromDeck(Pokemon._id));
      
  }

  return (
    <React.Fragment>
      <div key={Pokemon._id} className="Card_Div">
        {/* <Link to={`cards/${Pokemon._id}`}> */}
          <img src={Pokemon.image} alt="Picture" className="bouder dim"></img>
        {/* </Link> */}

        <div className="Name_Background_E">
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
            think it dose nothing.          {Pokemon._id}
          </p>
        </div>
        <button className="btn btn-primary btn-block btn-large"
         onClick={delete_card_handler}>Remove</button> 
      </div>
    </React.Fragment>
  );
}
