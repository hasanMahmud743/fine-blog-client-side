import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducer/rootReducer";

import { composeWithDevTools } from "redux-devtools-extension";
import cartCounter from "../ middleware/cartCounter";

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(cartCounter, thunk))
);
