import React, { useState } from "react";
import "./App.css";
import CrearMeme from "../CrearMeme/CrearMeme";
import MisMemes from "../MisMemes/MisMemes";
import { Router, Switch, Route, Link } from "react-router-dom";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

const Home = () => {
  return <h1 className="home-titulo"> Bienvenido a el creador de memes </h1>;
};
export default function App(props) {
  return (
    <div>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to="/" className="navbar-brand">
            CREADOR MEMES
          </Link>

          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/crearMemes" className="nav-link">
                Crear un nuevo meme
              </Link>
            </li>
          </div>

          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/misMemes" className="nav-link">
                Mis memes
              </Link>
            </li>
          </div>
        </nav>
      </div>

      <div className="container mt-3">
        <Switch>
          <Route path="/crearMemes">
            <CrearMeme />
          </Route>
          <Route path="/misMemes">
            <MisMemes></MisMemes>
          </Route>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
      </div>
    </div>
  );
}
