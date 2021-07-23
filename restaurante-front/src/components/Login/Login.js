import React, { useState, useRef } from "react";

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

const Login = (props) => {

  const onChangeEmail = (e) => {
    // TODO
  };

  const onChangePassword = (e) => {
    // TODO
  };

  const handleLogin = (e) => {
    // TODO
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

        <Form onSubmit={handleLogin}>
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
            <button className="btn btn-primary btn-block">
              <span>Login</span>
            </button>
          </div>
          <CheckButton style={{ display: "none" }}/>
        </Form>
      </div>
    </div>
  );
};

export default Login;
