import actionType from "./actionTypes";

function productReducer(state = [], action) {
  switch (action.type) {
    case actionType.ADD_PRODUCT:
      return (state = action.payload);
    default:
      return state;
  }
}

export default productReducer;
