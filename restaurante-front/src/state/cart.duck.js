const ADD_CART_SUCCESS_TYPE = "ADD_CART_SUCCESS";
const ADD_UNIT_TYPE = "ADD_UNIT";
const REMOVE_UNIT_TYPE = "REMOVE_UNIT";
const EMPTY_CART_TYPE = "EMPTY_CART";

export const emptyCart = () => (dispatch) => {
  dispatch({
    type: EMPTY_CART_TYPE,
    payload: null,
  });
  return Promise.resolve();
};

export const addToCart = (cartItem) => (dispatch) => {
  dispatch({
    type: ADD_CART_SUCCESS_TYPE,
    payload: cartItem,
  });
  return Promise.resolve();
};

export const addUnit = (cartItem) => (dispatch) => {
  dispatch({
    type: ADD_UNIT_TYPE,
    payload: cartItem,
  });
  return Promise.resolve();
};

export const removeUnit = (cartItem) => (dispatch) => {
  dispatch({
    type: REMOVE_UNIT_TYPE,
    payload: cartItem,
  });
  return Promise.resolve();
};

export default function (state = [], action) {
  const { type, payload } = action;

  switch (type) {
    case ADD_CART_SUCCESS_TYPE:
      return state.concat(payload);
    case ADD_UNIT_TYPE:
      return state.map((item) => {
        if (item.id === payload.id) {
          return {
            ...item,
            cantidad: item.cantidad + 1,
          };
        }
        return item;
      });
    case REMOVE_UNIT_TYPE:
      return state.map((item) => {
        if (item.id === payload.id) {
          return {
            ...item,
            cantidad: item.cantidad - 1,
          };
        }
        return item;
      });
    case EMPTY_CART_TYPE:
      return [];
    default:
      return state;
  }
}
