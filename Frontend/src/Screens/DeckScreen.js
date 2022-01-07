import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Hourglass } from "react-spinners-css";
import { listDecks } from "../Actions/DeckActions";
import Create_Form from "../componets/Create_Form";
import Deck from "../componets/Deck";
import MessageBox from "../componets/MessageBox";
import Modal_Pop from "../componets/Model_Pop";

const BUTTON_WRAPPER_STYLES = {
  position: 'relative',
  zIndex: 1
}



export default function DeckScreen() {
  const deckList = useSelector((state) => state.deckList);
  const { loading, decks, error } = deckList;
  const dispatch = useDispatch();
  console.log(decks)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    dispatch(listDecks());
  }, []);

  return (
    
    <React.Fragment>
      {loading ? (
        <Hourglass color="purple" />
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div>
        <div className="deckrow">         
        {decks.map((deck) => (            
          <Deck key={deck._id} deck={deck}> </Deck> ))        

      }

 
            </div>
            

            <div style={BUTTON_WRAPPER_STYLES} onClick={() => console.log('clicked')}>
<button className="btn btn-primary btn-block btn-large" onClick={() => setIsOpen(true)}> Create </button>

<Modal_Pop open={isOpen} onClose={() => setIsOpen(false)}>
  <Create_Form ></Create_Form >

</Modal_Pop>
</div>
</div>
      ) }
 



    </React.Fragment>
    
  ); // end of return
}
