import {createStore, compose, applyMiddleware, combineReducers } from 'redux'
import  thunk from 'redux-thunk'
import { cardDetailsReducer, cardListReducer } from './Reducers/CardReducer';
import { deckCreateReducer, deckDeleteReducer, DeckDetailsReducer, deckListReducer, DeckUpdateReducer } from './Reducers/DeckReducer';
import { userSigninReducer } from './Reducers/UserReducer';



const initialState = {
  userSignin: {
    userInfo: localStorage.getItem('userInfo')
      ? JSON.parse(localStorage.getItem('userInfo'))
      : null,
  },
  // deckList: {
  //     decks: localStorage.getItem('deckItems')
  //       ? JSON.parse(localStorage.getItem('deckItems'))
  //       : []
  //   },
  };


const reducer = combineReducers({

  deckList: deckListReducer,
  cardList: cardListReducer,
  deckDetails: DeckDetailsReducer,
  userSignin: userSigninReducer,
  cardDetails: cardDetailsReducer,
  createdeck: deckCreateReducer,
  deck_Update: DeckUpdateReducer,
  deckdelete: deckDeleteReducer

})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store