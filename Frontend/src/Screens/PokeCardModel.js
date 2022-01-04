import './ScreenCSS/Model.css'
import ReactDom from 'react-dom'
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CardDetails } from '../Actions/CardActions ';
import { Hourglass } from 'react-spinners-css';
import MessageBox from '../componets/MessageBox';



const MODAL_STYLES = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#092756',
  padding: '50px',
  zIndex: 1000
}

const OVERLAY_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, .7)',
  zIndex: 1000
}

export default function PokeCardModel({ open, children, onClose }) {
  const dispatch = useDispatch();

  const cardDetails = useSelector(state => state.cardDetails);
  const {_card, error, loading} = cardDetails 
  const params = useParams();
  const { id: cardId } = params;


  // useEffect(() => {
  //   dispatch(CardDetails(cardId));

  // }, [dispatch, cardId]);

  console.log('cardid Model:',cardId)
 


  if (!open) return null

  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES} />
      <div style={MODAL_STYLES}>
      <button onClick={onClose}>Close Modal</button>
        {children}

      </div>
    </>,
    document.getElementById('portal')
  )
}











//- before
//   return (
//     <>
//           {loading ? (
//         <Hourglass color="purple" />
//       ) : error ? (
//         <MessageBox variant="danger">{error}</MessageBox>
//       ) : (
//     <div>
//       <h2>incomming</h2>
//       <h2>{_card.name}</h2>
 
//     </div>
//       )}
//     </>
//   );
// }
