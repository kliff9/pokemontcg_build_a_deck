
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { createDeck } from '../Actions/DeckActions';
import './Create_Form.css'

export default function Create_Form() {

  const createdeck = useSelector((state) => state.createdeck);
  const { deck: new_created_deck } = createdeck;
  const dispatch = useDispatch();

  const [Deck_Name, setDeck_Name] = useState('');
  const [Deck_img, setDeck_Img] = useState('');

  // useEffect(() => {
  // }, [new_created_deck, dispatch]);

// onSubmit={createHandler}>
  const createHandler = (e) => {
    // e.preventDefault();
    dispatch(createDeck(Deck_Name, Deck_img));
  };

//   const dropdownchage = (e) => {
//     setDeck_Img(e.target.value)

// }
// console.log(Deck_Name)
// console.log(Deck_img)
console.log('create_deck:', createdeck)


  return (
    <React.Fragment>
<form class="form" onSubmit={createHandler}>
      <h3 className="create_title">Create A Deck</h3>
      <input
          type=""
          placeholder="name"
          required="required"
          className="create_input"
          value={Deck_Name}
          onChange={(e) => setDeck_Name(e.target.value)}
        />
      <select value={Deck_img} onChange={(e) => setDeck_Img(e.target.value)}>
  <option selected value="/img/MasterBallDeck.png">MasterBall</option>
  <option value="/deck_select_img/Gengar_Deck_0.jfif">Gengar</option>
</select>

 
      <button type="text" class="submit" >submit</button>
    </form>
      </React.Fragment>
  )
}