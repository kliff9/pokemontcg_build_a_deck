
import { CARD_ADD_ITEM, CARD_LIST_FAIL, CARD_LIST_REQUEST, CARD_LIST_SUCCESS } from "../Constants/CardConstants";


export const cardListReducer = (state = {loading: true , cards: [] }, action) => {
  switch(action.type){  
      case CARD_LIST_REQUEST:
          return{ loading: true }
      case CARD_LIST_SUCCESS:
          return {loading: false, cards: action.payload }          


      case CARD_LIST_FAIL:
          return {loading: false, error: action.payload}
      
      default:
          return state;
  }

}














// export const CARDReducer = (state = { cardItems: [] }, action) => {
//     switch(action.type) {
//         case 'CARD_ADD_ITEM':
//             const item = action.payload

//                  return { ...state, cardItems: [...state.cardItems, item] };
            
//       case 'CARD_REMOVE_ITEM':
//               return {
//                 ...state,
//                 cardItems: state.cardItems.filter((x) => x.product !== action.payload),
//               };

//      default:
//             return state;
//           }
//         };
