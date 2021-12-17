
import { CARD_ADD_ITEM, DECK_DETAILS_FAIL, DECK_DETAILS_REQUEST, DECK_DETAILS_SUCCESS, DECK_LIST_FAIL, DECK_LIST_REQUEST, DECK_LIST_SUCCESS } from "../Constants/DeckConstants";


export const deckListReducer = (state = {loading: true , decks: [] }, action) => {
  switch(action.type){  
      case DECK_LIST_REQUEST:
          return{ loading: true }
      case DECK_LIST_SUCCESS:
          return {loading: false, decks: action.payload }          


      case DECK_LIST_FAIL:
          return {loading: false, error: action.payload}
        case CARD_ADD_ITEM:
            const card = action.payload
        // return  { ...state, decks: [...state.deckList,card] }
        console.log('statecards: ',  state.deckList.Cards)
        return  { ...state, decks: [...state.deckList.Cards, card] }

      default:
          return state;
  }

}



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

    default:
      return state;
  }
};










export const deckReducer = (state = { cardItems: [] }, action) => {
    switch(action.type) {
        case 'DECK_ADD_ITEM':
            const item = action.payload

                 return { ...state, cardItems: [...state.cardItems, item] };
            
      case 'DECK_REMOVE_ITEM':
              return {
                ...state,
                cardItems: state.cardItems.filter((x) => x.NAME !== action.payload),
              };

     default:
            return state;
          }
        };
