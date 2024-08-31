import {  combineReducers, legacy_createStore } from "redux";
import cartReducer from "./cart";

// Combining reducers
const rootReducer = combineReducers({
  cart: cartReducer,
});

// Creating the store
const store = legacy_createStore(rootReducer);

export default store;