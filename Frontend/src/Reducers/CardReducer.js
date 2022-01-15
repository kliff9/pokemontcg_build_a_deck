import {
  CARD_ADD_ITEM,
  CARD_DELETE_FAIL,
  CARD_DELETE_REQUEST,
  CARD_DELETE_SUCCESS,
  CARD_DETAILS_FAIL,
  CARD_DETAILS_REQUEST,
  CARD_DETAILS_SUCCESS,
  CARD_LIST_FAIL,
  CARD_LIST_REQUEST,
  CARD_LIST_SUCCESS,
} from "../Constants/CardConstants";

export const cardListReducer = (
  state = { loading: true, cards: [] },
  action
) => {
  switch (action.type) {
    case CARD_LIST_REQUEST:
      return { loading: true };
    case CARD_LIST_SUCCESS:
      return { loading: false, cards: action.payload };

    case CARD_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const cardDetailsReducer = (
  state = { loading: true, _card: {} },
  action
) => {
  switch (action.type) {
    case CARD_DETAILS_REQUEST:
      return { loading: true };
    case CARD_DETAILS_SUCCESS:
      return { loading: false, _card: action.payload };

    case CARD_DETAILS_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const cardDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case CARD_DELETE_REQUEST:
      return { loading: true };
    case CARD_DELETE_SUCCESS:
      return { loading: false };
    case CARD_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
