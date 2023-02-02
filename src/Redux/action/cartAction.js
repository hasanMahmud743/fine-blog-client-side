import { add_to_cart, upload_toggle } from "../actionTypes/actionTypes";

export const addProduct = (cart) => {
  console.log(cart);
  return {
    type: add_to_cart,
    payload: cart,
  };
};

export const firstUploadToggle = (value) => {
  return {
    type: upload_toggle,
    payload: value
  };
};

export const lastUploadToggle = (value) => {
    return {
      type: upload_toggle,
      payload: value
    };
  };
