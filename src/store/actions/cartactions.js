export const ADD_PRODUCT = "ADD_PRODUCT";
export const REDUCE_QUANTITY = "REDUCE_QUANTITY";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";
export const INIT_CART = "INIT_CART";

export const addProduct = (product) => {
  return (dispatch) => {
    dispatch({
      type: ADD_PRODUCT,
      data: product,
    });
  };
};

export const removeProduct = (productid) => {
  return (dispatch) => {
    dispatch({
      type: REMOVE_PRODUCT,
      data: productid,
    });
  };
};

export const reduceQuantity = (product) => {
  return (dispatch) => {
    dispatch({
      type: REDUCE_QUANTITY,
      data: product,
    });
  };
};
