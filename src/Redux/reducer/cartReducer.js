import { add_to_cart } from "../actionTypes/actionTypes";

const initialState = { cart: [] };
console.log(initialState);

const cartReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case add_to_cart:
      console.log(action);
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    default:
      return state;
  }
};

export default cartReducer;
