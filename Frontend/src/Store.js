import {createStore, compose, applyMiddleware, combineReducers } from 'redux'
import  thunk from 'redux-thunk'
import { cardListReducer } from './Reducers/CardReducer';
import { DeckDetailsReducer, deckListReducer } from './Reducers/DeckReducer';



const initialState = {
    // cart: {
    //   cartItems: localStorage.getItem('cartItems')
    //     ? JSON.parse(localStorage.getItem('cartItems'))
    //     : [],  
    // }
  };

  
const reducer = combineReducers({

  deckList: deckListReducer,
  cardList: cardListReducer,
  deckDetails: DeckDetailsReducer
})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store