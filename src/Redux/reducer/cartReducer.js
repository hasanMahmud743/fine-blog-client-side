import { add_to_cart, upload_toggle } from "../actionTypes/actionTypes";

const initialState = { cart: [], upload: '' };
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
      case upload_toggle:
        return{
          ...state,
          upload: action.payload
        }
    default:
      return state;
  }
};

export default cartReducer;
