import * as actionTypes from "../actions/cartactions";
import { reducer, itemsToArray } from "../../utils";
import { addToCart } from "../../services/products";
const DEFAULT_STATE = { items: {}, totalPrice: 0, totalQuantity: 0 };
const cartreducer = (state = DEFAULT_STATE, action) => {
  let existingItem;
  let itemsArray = [];

  switch (action.type) {
    case actionTypes.INIT_CART:
      return action.data;
    case actionTypes.ADD_PRODUCT:
      existingItem = state.items[action.data.id];
      if (!existingItem && action.data.quantity) {
        existingItem = state.items[action.data.id] = {
          ...action.data,
          cartQuantity: 1,
        };
      } else {
        if (existingItem.cartQuantity === action.data.quantity) {
          existingItem.cartQuantity = action.data.quantity;
        } else {
          existingItem.cartQuantity++;
        }
      }
      addToCart(state.items);
      itemsArray = itemsToArray(state.items);
      state.totalPrice = itemsArray
        .map((item) => item.price * item.cartQuantity)
        .reduce(reducer);
      state.totalQuantity = itemsArray
        .map((item) => item.cartQuantity)
        .reduce(reducer);
      return Object.assign({}, state, {
        items: {
          ...state.items,
          [existingItem.id]: existingItem,
        },
      });
    case actionTypes.REDUCE_QUANTITY:
      existingItem = state.items[action.data.id];
      if (existingItem.cartQuantity === 0) {
        existingItem.cartQuantity = 0;
      } else {
        existingItem.cartQuantity--;
      }
      addToCart(state.items);
      itemsArray = itemsToArray(state.items);
      state.totalPrice = itemsArray
        .map((item) => item.price * item.cartQuantity)
        .reduce(reducer);
      state.totalQuantity = itemsArray
        .map((item) => item.cartQuantity)
        .reduce(reducer);

      return Object.assign({}, state, {
        items: {
          ...state.items,
          [existingItem.id]: existingItem,
        },
      });
    case actionTypes.REMOVE_PRODUCT:
      const newState = delete state.items[action.data];
      itemsArray = itemsToArray(state.items);
      if (itemsArray.length) {
        state.totalPrice = itemsArray
          .map((item) => item.price * item.cartQuantity)
          .reduce(reducer);
        state.totalQuantity = itemsArray
          .map((item) => item.cartQuantity)
          .reduce(reducer);
        return Object.assign({}, state, {
          ...state,
          newState,
        });
      } else {
        return {
          ...state,
          items: {},
          totalPrice: 0,
          totalQuantity: 0,
        };
      }
    default:
      return state;
  } //end of switch
}; //end of cartReducer;

export default cartreducer;
