const ADD_CART_SUCCESS_TYPE = "ADD_CART_SUCCESS";

export const addToCart = (cartItem) => (dispatch) => {
  dispatch({
    type: ADD_CART_SUCCESS_TYPE,
    payload: cartItem,
  });
  return Promise.resolve();
};

export default function (state = [], action) {
  const { type, payload } = action;

  switch (type) {
    case ADD_CART_SUCCESS_TYPE:
      return state.concat(payload);

    default:
      return state;
  }
}
