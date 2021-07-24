const ADD_CART_SUCCESS_TYPE = "ADD_CART_SUCCESS";
const ADD_UNIT_TYPE = "ADD_UNIT";

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

export default function (state = [], action) {
  const { type, payload } = action;

  switch (type) {
    case ADD_CART_SUCCESS_TYPE:
      return state.concat(payload);
    case ADD_UNIT_TYPE:
      return; // magiiiiaaa
    default:
      return state;
  }
}
