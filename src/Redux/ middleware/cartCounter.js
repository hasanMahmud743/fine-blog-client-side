import { add_to_cart } from "../actionTypes/actionTypes";

const cartCounter = (store) => (next) => (action) => {
  const state = store.getState();
  const cart = state.carts.cart;

  if (action.type === add_to_cart) {
    const newCart = {
      ...action,
      payload: { ...action.payload, viewed: 1 },
    };

    return next(newCart);
  }

  return next(action);
};

export default cartCounter;
