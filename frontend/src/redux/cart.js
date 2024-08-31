import actionType from "./actionTypes";

// Cart Reducer
function cartReducer(state = [], action) {
  switch (action.type) {
    case actionType.ADD_TO_CART:
      return [...state, action.payload];
    default:
      return state;
  }
}

export default cartReducer;