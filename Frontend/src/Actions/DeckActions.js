import {
  CARD_ADD_ITEM,
  CARD_REMOVE_ITEM,
  DECK_CREATE_FAIL,
  DECK_CREATE_REQUEST,
  DECK_CREATE_SUCCESS,
  DECK_DELETE_FAIL,
  DECK_DELETE_REQUEST,
  DECK_DELETE_SUCCESS,
  DECK_DETAILS_FAIL,
  DECK_DETAILS_REQUEST,
  DECK_DETAILS_SUCCESS,
  DECK_LIST_FAIL,
  DECK_LIST_REQUEST,
  DECK_LIST_SUCCESS,
  DECK_UPDATE_FAIL,
  DECK_UPDATE_REQUEST,
  DECK_UPDATE_SUCCESS,
  RESET_STATE,
} from "../Constants/DeckConstants";
import Axios from "axios";

export const listDecks = () => async (dispatch) => {
  dispatch({
    type: DECK_LIST_REQUEST,
  });
  // dispatch({
  //   type: RESET_STATE
  //   });

  try {
    const { data } = await Axios.get("/api/decks");

    dispatch({
      type: DECK_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DECK_LIST_FAIL,
      payload: error.message,
    });
  }
};

export const AddtoDeck = (cardId) => async (dispatch, getState) => {
  const { data } = await Axios.get(`/api/cards/${cardId}`);

  dispatch({
    type: CARD_ADD_ITEM,
    payload: {
      // adding to card
      name: data.name,
      type: data.type,
      image: data.image,
      energy: data.energy,
      description: data.description,
      // _id: data.id,
    },
  });
  // localStorage.setItem('deckItems', JSON.stringify(getState().deckList.decks));
};

export const detailsDECK = (deckId) => async (dispatch) => {
  dispatch({
    type: DECK_DETAILS_REQUEST,
    payload: deckId,
  });
  try {
    const { data } = await Axios.get(`/api/decks/${deckId}`);

    dispatch({
      type: DECK_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DECK_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createDeck =
  (Deck_Name, Deck_img) => async (dispatch, getState) => {
    dispatch({ type: DECK_CREATE_REQUEST });
    try {
      const { data } = await Axios.post("/api/decks", { Deck_Name, Deck_img });

      dispatch({
        type: DECK_CREATE_SUCCESS,
        payload: data.deck,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: DECK_CREATE_FAIL, payload: message });
    }
  };

export const update_deck = (deck) => async (dispatch, getState) => {
  dispatch({ type: DECK_UPDATE_REQUEST, payload: deck });
  try {
    const { data } = await Axios.put(`/api/decks/${deck._id}`, deck, {});
    dispatch({ type: DECK_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: DECK_UPDATE_FAIL, error: message });
  }
};

export const delete_deck = (deckId) => async (dispatch, getState) => {
  dispatch({ type: DECK_DELETE_REQUEST, payload: deckId });

  try {
    const { data } = await Axios.delete(`/api/decks/${deckId}`);
    dispatch({ type: DECK_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: DECK_DELETE_FAIL, payload: message });
  }
};
export const removeFromDeck = (cardId) => (dispatch, getState) => {
  dispatch({ type: CARD_REMOVE_ITEM, payload: cardId });
};
