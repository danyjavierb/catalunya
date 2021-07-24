import AuthService from "../services/auth.service";

const LOGIN_SUCCESS_TYPE = "LOGIN_SUCCESS";
const LOGIN_FAIL_TYPE = "LOGIN_FAIL";

export const loginAction = (email, password) => (dispatch) => {
  return AuthService.login(email, password)
    .then((data) => {
      dispatch({
        type: LOGIN_SUCCESS_TYPE,
        payload: { user: data },
      });
    })
    .catch((err) => {
      dispatch({
        type: LOGIN_FAIL_TYPE,
      });
    });
};
