import {  CARD_DELETE_FAIL, CARD_DELETE_REQUEST, CARD_DELETE_SUCCESS, CARD_DETAILS_FAIL, CARD_DETAILS_REQUEST, CARD_DETAILS_SUCCESS, CARD_LIST_FAIL, CARD_LIST_REQUEST, CARD_LIST_SUCCESS } from "../Constants/CardConstants";
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
 
 
export const CardDetails = (cardId) => async(dispatch) => {
    dispatch({
        type: CARD_DETAILS_REQUEST, payload: cardId
    })
    try {
        const  { data } = await Axios.get(`/api/cards/${cardId}`);

        dispatch({

            type: CARD_DETAILS_SUCCESS, payload:data

        })

    }catch (error) {
        dispatch({
          type: CARD_DETAILS_FAIL,
          payload:
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message,
        });
      }
    };

 
 
    export const delete_card = (cardId) => async (dispatch, getState) => {
        dispatch({ type: CARD_DELETE_REQUEST, payload: cardId });

        try {
          const { data } = await Axios.delete(`/api/cards/${cardId}`)
          dispatch({ type: CARD_DELETE_SUCCESS });
        } catch (error) {
          const message =
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message;
          dispatch({ type: CARD_DELETE_FAIL, payload: message });
        }
      };
