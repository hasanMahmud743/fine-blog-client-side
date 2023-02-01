import { add_to_cart } from "../actionTypes/actionTypes"

export const addProduct = (cart) =>{
    console.log(cart)
    return {
        type: add_to_cart,
        payload: cart
    }
}
