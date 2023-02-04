import {
  add_product,
  delete_product,
  product_add
} from "../actionTypes/actionTypes";

const initialState = {
  products: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case add_product:
      return {
        ...state,
        products: action.payload,
      };
    case product_add: {
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    }

    case delete_product: {
      return {
        ...state,
        products: state?.products.filter((pr) => pr._id !== action.payload),
      };
    }
    default:
      return state;
  }
};

export default productReducer;
