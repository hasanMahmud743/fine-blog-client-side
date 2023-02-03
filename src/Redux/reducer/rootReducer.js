import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import productReducer from "./productReducer";

const rootReducer = combineReducers({
carts : cartReducer,
product: productReducer
})

export default rootReducer