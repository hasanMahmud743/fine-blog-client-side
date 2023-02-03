import {
  add_tag,
  add_to_cart,
  upload_toggle
} from "../actionTypes/actionTypes";

const initialState = { cart: [], upload: "first", tags: [] };
console.log(initialState);

const cartReducer = (state = initialState, action) => {
  console.log(action);
  const repeated = state.cart.find((rt) => rt._id === action.payload._id);
  switch (action.type) {
    case add_to_cart:
      console.log(action);
      if (state.cart.length) {
       
        console.log(repeated)
        if (repeated) {
          repeated.viewed = repeated.viewed + 1
          return {
            ...state,
            repeated
          };
        }
      }
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case upload_toggle:
      return {
        ...state,
        upload: action.payload,
      };
    case add_tag:
      if (state.tags.find((product) => product === action.payload)) {
        return {
          ...state,
          tags: [...state.tags].filter((product) => product !== action.payload),
        };
      }
      return {
        ...state,
        tags: [...state.tags, action.payload],
      };
    default:
      return state;
  }
};

export default cartReducer;
