import './ScreenCSS/Model.css'
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CardDetails } from '../Actions/CardActions ';
import { Hourglass } from 'react-spinners-css';
import MessageBox from '../componets/MessageBox';
export default function PokeCardModel() {
  const dispatch = useDispatch();

  const cardDetails = useSelector(state => state.cardDetails);
  const {_card, error, loading} = cardDetails 
  const params = useParams();
  const { id: cardId } = params;




  useEffect(() => {
    dispatch(CardDetails(cardId));

  }, [dispatch, cardId]);

  // console.log('deckId',cardId)
 
  
  return (
    <>
          {loading ? (
        <Hourglass color="purple" />
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
    <div>
      <h2>incomming</h2>
      <h2>{_card.name}</h2>
 
    </div>
      )}
    </>
  );
}