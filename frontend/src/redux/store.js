import { combineReducers, legacy_createStore } from "redux";
import cartReducer from "./cart";
import productReducer from "./products";

// Combining reducers
const rootReducer = combineReducers({
  cart: cartReducer,
  product: productReducer,
});

// Creating the store
const store = legacy_createStore(rootReducer);

export default store;
