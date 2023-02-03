import { add_product } from "../actionTypes/actionTypes";

const initialState = {
  products: [],
};

const productReducer = (state = initialState, action) => {
    switch(action.type){
        case add_product:
            return{
                ...state,
                products: action.payload
            }
        default:
            return state
    }

};

export default productReducer
