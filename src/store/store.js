import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import productreducer from "./reducers/productreducer";
import cartreducer from "./reducers/cartreducer";
import messageReducer from "./reducers/messagereducer";

const reducer = combineReducers({
  products: productreducer,
  cart: cartreducer,
  message: messageReducer,
});
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
