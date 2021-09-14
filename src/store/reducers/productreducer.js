import { INIT_PRODUCTS } from "../actions/productactions";

const productreducer = (state = [], action) => {
  switch (action.type) {
    case INIT_PRODUCTS:
      return action.data;
    default:
      return state;
  }
};

export default productreducer;
