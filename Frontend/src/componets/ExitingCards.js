import './ExistingCard.css'
import React from "react";
import { Link } from 'react-router-dom'

export default function ExistingCard(P) {
    const { Pokemon } = P 

    
    return (
        <React.Fragment>

            <div key={Pokemon._id} className="Card_Div">
                <Link to={`/cards/${Pokemon._id}`}> 
                <img src={Pokemon.image} alt="Picture" className="bouder dim"></img>
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
                <button>Add</button>


                



            </div>


        </React.Fragment>
    )
}
