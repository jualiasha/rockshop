import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import productreducer from "./reducers/productreducer";
import cartreducer from "./reducers/cartreducer";

const reducer = combineReducers({
  products: productreducer,
  cart: cartreducer,
});
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
