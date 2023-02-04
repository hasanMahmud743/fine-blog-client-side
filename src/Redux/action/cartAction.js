import {
  add_product,
  add_tag,
  add_to_cart,
  delete_product,
  product_add,
  update_product,
  upload_toggle
} from "../actionTypes/actionTypes";

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
    payload: value,
  };
};

export const lastUploadToggle = (value) => {
  return {
    type: upload_toggle,
    payload: value,
  };
};

export const addTags = (tagName) => {
  return {
    type: add_tag,
    payload: tagName,
  };
};

export const loadProduct = (data) => {
  return {
    type: add_product,
    payload: data,
  };
};

export const productAdd = (product) => {
  return {
    type: product_add,
    payload: product,
  };
};

export const deletedProduct = (id) =>{
  return{
    type: delete_product,
    payload: id
  }
}

export const updateProduct = (product) =>{
  return{
    type: update_product,
    payload: product
  }
}
