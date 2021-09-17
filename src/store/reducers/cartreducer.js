import * as actionTypes from "../actions/cartactions";
import { reducer, itemsToArray } from "../../utils";
import { addToCart } from "../../services/products";

const cartreducer = (
  state = { items: {}, totalPrice: 0, totalQuantity: 0 },
  action
) => {
  let existingItem;
  let itemsArray = [];

  switch (action.type) {
    case actionTypes.INIT_CART:
      return action.data;
    case actionTypes.ADD_PRODUCT:
      existingItem = state.items[action.data.id];
      if (!existingItem && action.data.quantity) {
        existingItem = state.items[action.data.id] = {
          id: action.data.id,
          name: action.data.name,
          category: action.data.category,
          src: action.data.src,
          price: action.data.price,
          quantity: 1,
          description: action.data.description,
        };
      } else {
        if (existingItem.quantity === action.data.quantity) {
          existingItem.quantity = action.data.quantity;
        } else {
          existingItem.quantity++;
        }
      }
      addToCart(state.items);
      itemsArray = itemsToArray(state.items);
      state.totalPrice = itemsArray
        .map((item) => item.price * item.quantity)
        .reduce(reducer);
      state.totalQuantity = itemsArray
        .map((item) => item.quantity)
        .reduce(reducer);
      return Object.assign({}, state, {
        items: {
          ...state.items,
          [existingItem.id]: existingItem,
        },
      });
    case actionTypes.REDUCE_QUANTITY:
      existingItem = state.items[action.data.id];
      if (existingItem.quantity === 0) {
        existingItem.quantity = 0;
      } else {
        existingItem.quantity--;
      }
      addToCart(state.items);
      itemsArray = itemsToArray(state.items);
      state.totalPrice = itemsArray
        .map((item) => item.price * item.quantity)
        .reduce(reducer);
      state.totalQuantity = itemsArray
        .map((item) => item.quantity)
        .reduce(reducer);

      return Object.assign({}, state, {
        items: {
          ...state.items,
          [existingItem.id]: existingItem,
        },
      });
    case actionTypes.REMOVE_PRODUCT:
      const newstate = delete state.items[action.data];
      itemsArray = itemsToArray(state.items);
      state.totalPrice = itemsArray
        .map((item) => item.price * item.quantity)
        .reduce(reducer);
      state.totalQuantity = itemsArray
        .map((item) => item.quantity)
        .reduce(reducer);
      return { ...state, newstate };
    default:
      return state;
  } //end of switch
}; //end of cartReducer;

export default cartreducer;
