import React, { useState, useRef } from "react";

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { loginAction } from "../../state/auth.duck";
import { connect, useDispatch, useSelector } from "react-redux";

import { Redirect } from "react-router-dom";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const form = useRef();
  const checkButton = useRef();

  //opcion 2021

  const dispatch = useDispatch();

  const { isLoggedIn } = useSelector((state) => state.auth);

  if (isLoggedIn) {
    return <Redirect to="/platos" />;
  }

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);

    form.current.validateAll();

    if (checkButton.current.context._errors.length === 0) {
      dispatch(loginAction(email, password))
        .then(() => {
          props.history.push("/platos");
        })
        .catch(() => {
          setLoading(false);
          alert("algo salio mal");
        });
    } else {
      setLoading(false);
    }
  };

  // TODO si el usuario está logueado redireccionar a platos

  return (
    <div className="col-md-12">
      <div className="card card-container">
        <img
          src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
          alt="profile-img"
          className="profile-img-card"
        />

        <Form onSubmit={handleLogin} ref={form}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <Input
              type="email"
              className="form-control"
              name="email"
              onChange={onChangeEmail}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <Input
              type="password"
              className="form-control"
              name="password"
              onChange={onChangePassword}
            />
          </div>

          <div className="form-group">
            <button className="btn btn-primary btn-block" disabled={loading}>
              {loading ? (
                <div class="spinner-border text-light" role="status"></div>
              ) : (
                <span>Login</span>
              )}
            </button>
          </div>
          <CheckButton style={{ display: "none" }} ref={checkButton} />
        </Form>
      </div>
    </div>
  );
};

// Opcion 2020
// const mapDispatchToProps = function (dispatch) {
//   return {
//     login: (email, password) => dispatch(loginAction(email,password))
//   }
// }

// export default connect(null,mapDispatchToProps)(Login);

export default Login;
