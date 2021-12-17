
import React, { useEffect } from "react";
import Select from "react-select"

import { useDispatch, useSelector } from "react-redux";
import { detailsDECK } from "../Actions/DeckActions";
import { useParams } from "react-router-dom";
import MessageBox from "../componets/MessageBox";
import { Hourglass } from "react-spinners-css";

export default function PostScreen() {

const dispatch = useDispatch();

const deckDetails = useSelector(state => state.deckDetails);
const {DECK, error, loading} = deckDetails 
const params = useParams();
const { id: deckId } = params;




useEffect(() => {
  dispatch(detailsDECK(deckId));

}, [dispatch, deckId]);

console.log(deckId)

    const deck_images = [
        { value: 'Gengar', label: 'Gengar', image: '/deck_select_img/Gengar_Deck_0.jfif' },
        { value:'Pikachu', label: 'Pikachu', image: '/deck_select_img/Pikachu_Deck_1.jfif' }
      ];
return (
    <React.Fragment>
      {loading ? (
        <Hourglass color="purple" />
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (

    <div>
        <h2>Welcome {DECK.Deck_Name}</h2> 
        {/* <Select

options={deck_images}
formatOptionLabel={country => (
  <div className="country-option">
    <img src={country.image} alt="country-image" />
    <span>{country.label}</span>    
    </div>
)} />*/}
 
    </div> 
      )}
    </React.Fragment> 
)
}