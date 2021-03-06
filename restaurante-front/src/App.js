import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Router, Switch, Route, Link, BrowserRouter } from "react-router-dom";
import { history } from "./helpers/history";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Login from "./components/Login/Login";
import DishesList from "./components/DishesList/DishesList";
import Car from "./components/Car/Car";
import Dashboard from "./components/Dashboard/Dashboard";

const App = () => {
  return (
    <BrowserRouter history={history}>
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/"} className="navbar-brand">
            Delillah
          </Link>
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/login"} className="nav-link">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/carrito"} className="nav-link">
                Cart
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/dashboard"} className="nav-link">
                Dashboard
              </Link>
            </li>
          </div>
          )
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/platos" component={DishesList} />
            <Route exact path="/carrito" component={Car} />
            <Route exact path="/dashboard" component={Dashboard} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
