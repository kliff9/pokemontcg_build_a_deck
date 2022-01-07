import { Link } from "react-router-dom";
import React, {  useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddtoDeck } from "../Actions/DeckActions";
import './PokeCard.css'
import PokeCardModel from "../Screens/PokeCardModel";





export default function PokeCard(P) {
    const { Pokemon } = P 

    const dispatch = useDispatch();

   
    console.log('poke_card: Pokemon._id: ', Pokemon._id)

 
        const [isOpen, setIsOpen] = useState(false)

    return (
        <React.Fragment>
 
 <div key={Pokemon._id} className="Card_Div">
                <a onClick={() => setIsOpen(true)}> 
                <img  src={process.env.PUBLIC_URL + Pokemon.image} alt="Picture" className="bouder dim" ></img>
                </a>

                <div className="Name_Background">{Pokemon.name}
                <img src={`/img/type_${Pokemon.type}.png`} alt="Picture" className="energy energy_sizeTop"></img>
                </div>
              
               <div className="move1">
                {Pokemon.energy.map((Energy) => (            
                <img src={`/img/type_${Energy}.png`} alt="Picture" className="energy_move energy_size"></img>
                ))}
                    <h5 className="Move_Name">    Zapper Strike {Pokemon.MoveName}</h5>
                    <h5 className="MoveDamage">    70 {Pokemon.Damage}</h5>
                    <p className="MoveDescription">{Pokemon.Move_Description}This Attack does Something you may not think it dose nothing but in truth it does something so be prepared to get some damaged done to you bro.</p>

                </div>
                <button className="btn btn-primary btn-block btn-large" onClick={ () => dispatch(AddtoDeck(Pokemon._id))  }>Add</button>
            </div>


                   <PokeCardModel open={isOpen} onClose={() => setIsOpen(false)}>

<div className="Card_Div_model">
            <div key={Pokemon._id} className="Card_Div">
                <Link to={`/cards/${Pokemon._id}`}> 
                <img src={process.env.PUBLIC_URL + Pokemon.image} alt="Picture" className="bouder dim"></img>
                </Link>

                <div className="Name_Background">{Pokemon.name}
                <img src={`/img/type_${Pokemon.type}.png`} alt="Picture" className="energy energy_sizeTop"></img>
                </div>
              
               <div className="move1">
                {Pokemon.energy.map((Energy) => (            
                <img src={`/img/type_${Energy}.png`} alt="Picture" className="energy_move energy_size"></img>
                ))}
                    <h5 className="Move_Name">    Zapper Strike {Pokemon.MoveName}</h5>
                    <h5 className="MoveDamage">    70 {Pokemon.Damage}</h5>
                    <p className="MoveDescription">{Pokemon.Move_Description}This Attack does Something you may not think it dose nothing but in truth it does something so be prepared to get some damaged done to you bro.</p>

                </div>
                <button className="btn btn-primary btn-block btn-large" onClick={ () => dispatch(AddtoDeck(Pokemon._id))  }>Add</button>
            </div>
            </div>
                   </PokeCardModel>


        </React.Fragment>
    )
}
