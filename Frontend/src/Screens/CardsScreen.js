import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Hourglass } from "react-spinners-css";
import { listcards } from "../Actions/CardActions ";
import MessageBox from "../componets/MessageBox";
import PokeCard from "../componets/PokeCard";
import "./ScreenCSS/CardsScreen.css"

export default function CardsScreen() {



    const cardList = useSelector((state) => state.cardList);
const { cards, loading, error } = cardList;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(listcards());
      }, []);
      console.log('cards:  ', cards)

    return (
        <React.Fragment>
                  {loading ? (
        <Hourglass color="purple" />
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
          <div className='Black'>
        <div className="row center">         
          {cards.map((pokemon) => (            
           <PokeCard key={pokemon._id} Pokemon={pokemon}> </PokeCard>

          ))};
        </div>
        </div>
        )}


        </React.Fragment>

    )
}