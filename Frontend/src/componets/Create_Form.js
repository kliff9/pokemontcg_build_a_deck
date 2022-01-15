import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createDeck } from "../Actions/DeckActions";
import "./Create_Form.css";

export default function Create_Form() {
  const dispatch = useDispatch();

  const [Deck_Name, setDeck_Name] = useState("");
  const [Deck_img, setDeck_Img] = useState("");

  const createHandler = (e) => {
    dispatch(createDeck(Deck_Name, Deck_img));
  };

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
          <option>Select</option>
          <option value="/img/MasterBallDeck.png">MasterBall</option>
          <option value="/deck_select_img/Gengar_Deck_0.jfif">Gengar</option>
          <option value="/deck_select_img/Espeon_Deck_2.jfif">Espeon</option>
          <option value="/deck_select_img/Pikachu_Deck_1.jfif">Pikachu</option>
          <option value="/deck_select_img/Red_Deck_3.jfif">Red</option>
        </select>

        <button type="text" class="submit">
          submit
        </button>
      </form>
    </React.Fragment>
  );
}
