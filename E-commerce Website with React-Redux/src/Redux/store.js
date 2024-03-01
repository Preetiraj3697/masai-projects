// store.js
import {combineReducers, legacy_createStore } from 'redux';
import { cartReducer, wishlistReducer } from './reducers';

const rootReducer = combineReducers({
  cart: cartReducer,
  wishlist: wishlistReducer,
});

const store = legacy_createStore(rootReducer);

export default store;
