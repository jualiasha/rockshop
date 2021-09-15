import * as actionTypes from "../actions/cartactions";

const cartreducer = (
  state = { items: {}, totalPrice: 0, totalQuantity: 0 },
  action
) => {
  let existingItem;
  switch (action.type) {
    case actionTypes.INIT_CART:
      return action.data;
    case actionTypes.ADD_PRODUCT:
      existingItem = state.items[action.data.id];
      if (!existingItem) {
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
        existingItem.quantity++;
      }
      return Object.assign({}, state, {
        items: {
          ...state.items,
          [existingItem.id]: existingItem,
        },
      });
    case actionTypes.REDUCE_QUANTITY:
      existingItem = state.items[action.data.id];
      existingItem.quantity--;

      return Object.assign({}, state, {
        items: {
          ...state.items,
          [existingItem.id]: existingItem,
        },
      });
    case actionTypes.REMOVE_PRODUCT:
      const newstate = delete state.items[action.data];

      return { ...state, newstate };
    default:
      return state;
  } //end of switch
}; //end of cartReducer;

export default cartreducer;
