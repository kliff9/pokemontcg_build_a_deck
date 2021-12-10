import { CARD_ADD_ITEM, CARD_LIST_FAIL, CARD_LIST_REQUEST, CARD_LIST_SUCCESS } from "../Constants/CardConstants";
import Axios from "axios";



 export const listcards = () => async (dispatch) => {
  dispatch({
  type: CARD_LIST_REQUEST
  });
  try {
       const  { data } = await Axios.get('/api/cards');
      dispatch({
          type: CARD_LIST_SUCCESS, payload: data 
      })
  } catch(error) {
      dispatch({
          type: CARD_LIST_FAIL, payload:error.message
      })

  }
}
 
 
 
 
//  export const AddtoCARD = (productId, qty) => async (dispatch, getState) => {
//     dispatch({
//        type: CARD_ADD_ITEM,
//        payload: { // adding to card
//          name: PokemonCards.name,
//          image: PokemonCards.img,
//          type: PokemonCards.type,
//          energy: PokemonCards.energy,
//          product: PokemonCards.id
//        }
//      });
// //     localStorage.setItem('cardItems', JSON.stringify(getState().cart.cartItems));
//     }