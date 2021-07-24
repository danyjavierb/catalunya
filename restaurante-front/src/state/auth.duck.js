import AuthService from "../services/auth.service";

const LOGIN_SUCCESS_TYPE = "LOGIN_SUCCESS";
const LOGIN_FAIL_TYPE = "LOGIN_FAIL";

export const loginAction = (email, password) => (dispatch) => {
  return AuthService.login(email, password)
    .then((data) => {
      dispatch({
        type: LOGIN_SUCCESS_TYPE,
        payload: data,
      });
    })
    .catch((err) => {
      dispatch({
        type: LOGIN_FAIL_TYPE,
      });
    });
};

const token = localStorage.getItem("token");
const initialState = token
  ? { isLoggedIn: true, token }
  : { isLoggedIn: false, token: null };

export default function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_SUCCESS_TYPE:
      return {
        isLoggedIn: true,
        token: payload.token,
      };
    case LOGIN_FAIL_TYPE:
      return {
        isLoggedIn: false,
        token: null,
      };
    default:
      return state;
  }
}
