import { CARD_ADD_ITEM, DECK_DETAILS_FAIL, DECK_DETAILS_REQUEST, DECK_DETAILS_SUCCESS, DECK_LIST_FAIL, DECK_LIST_REQUEST, DECK_LIST_SUCCESS } from "../Constants/DeckConstants";
import Axios from "axios";



 export const listDecks = () => async (dispatch) => {
  dispatch({
  type: DECK_LIST_REQUEST
  });
  try {
       const  { data } = await Axios.get('/api/decks');
      dispatch({
          type: DECK_LIST_SUCCESS, payload: data 
      })
  } catch(error) {
      dispatch({
          type: DECK_LIST_FAIL, payload:error.message
      })

  }
}
 
 
 
 
 export const AddtoDeck = (cardId) => async (dispatch, getState) => {
    const { data } = await Axios.get(`/api/cards/${cardId}`);

    dispatch({

       type: CARD_ADD_ITEM,
       payload: { // adding to card
         name: data.name,
         image: data.image,
         type: data.type,
         energy: data.energy,
         description: data.description,
         card_: data.id
       }
     });
    localStorage.setItem('deckItems', JSON.stringify(getState().deckList.decks));
    }


    export const detailsDECK = (deckId) => async(dispatch) => {
        dispatch({
            type: DECK_DETAILS_REQUEST, payload: deckId
        })
        try {
            const  { data } = await Axios.get(`/api/decks/${deckId}`);

            dispatch({

                type: DECK_DETAILS_SUCCESS, payload:data

            })

        }catch (error) {
            dispatch({
              type: DECK_DETAILS_FAIL,
              payload:
                error.response && error.response.data.message
                  ? error.response.data.message
                  : error.message,
            });
          }
        };
    