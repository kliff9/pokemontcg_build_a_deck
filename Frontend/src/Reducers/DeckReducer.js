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
  DECK_EMPTY,
  DECK_LIST_FAIL,
  DECK_LIST_REQUEST,
  DECK_LIST_SUCCESS,
  DECK_UPDATE_FAIL,
  DECK_UPDATE_REQUEST,
  DECK_UPDATE_SUCCESS,
  RESET_STATE,
} from "../Constants/DeckConstants";

export const deckListReducer = (
  state = { loading: true, decks: [] },
  action
) => {
  switch (action.type) {
    case DECK_LIST_REQUEST:
      return { loading: true };

    case DECK_LIST_SUCCESS:
      return { loading: false, decks: action.payload };
    case RESET_STATE:
      return { loading: true, decks: [] };
    case DECK_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const DeckDetailsReducer = (
  state = { DECK: {}, loading: true },
  action
) => {
  switch (action.type) {
    case DECK_DETAILS_REQUEST:
      return { loading: true };
    case DECK_DETAILS_SUCCESS:
      return { loading: false, DECK: action.payload };
    case DECK_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    case RESET_STATE:
      return { loading: true, DECK: {} };
    case CARD_ADD_ITEM:
      const card = action.payload;
      return {
        ...state,
        DECK: { ...state.DECK, Cards: [...state.DECK.Cards, card] },
      };
    case CARD_REMOVE_ITEM:
      return {
        ...state,
        DECK: {
          ...state.DECK,
          Cards: [...state.DECK.Cards.filter((x) => x._id !== action.payload)],
        },
      };
    case DECK_EMPTY:
      return {
        ...state,
        DECK: { ...state.DECK, Cards: [] },
      };
    default:
      return state;
  }
};

export const deckCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case DECK_CREATE_REQUEST:
      return { loading: true };
    case DECK_CREATE_SUCCESS:
      return { loading: false, deck: action.payload };
    case DECK_CREATE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const DeckUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case DECK_UPDATE_REQUEST:
      return { loading: true };
    case DECK_UPDATE_SUCCESS:
      return { loading: false };
    case DECK_UPDATE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const deckDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case DECK_DELETE_REQUEST:
      return { loading: true };
    case DECK_DELETE_SUCCESS:
      return { loading: false };
    case DECK_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
