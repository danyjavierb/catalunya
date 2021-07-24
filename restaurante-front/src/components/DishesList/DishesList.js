import React, { useEffect } from "react";
import "./DishesList.css";
import Dish from "../Dish/Dish";
import Car from "../Car/Car";
import { useDispatch, useSelector } from "react-redux";
import state from "../../state";
import { Redirect } from "react-router-dom";
import { traerPlatosAction } from "../../state/platos.duck";

const DishesList = () => {
  // TODO si el usuario no está autenticado redireccionar al Login

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(traerPlatosAction()).catch((err) => {});
  }, []);

  const platos = useSelector((state) => state.platos);

  const { isLoggedIn } = useSelector((state) => state.auth);
  if (!isLoggedIn) {
    return <Redirect to="/login" />;
  }

  return (
    <div className="container row">
      <div className="col-md-12 m-auto list">
        <header className="jumbotron">
          <h3>Lista de platos</h3>
        </header>
        {platos &&
          platos.map((dish) => {
            return <Dish key={dish.id} dish={dish} />;
          })}
      </div>
    </div>
  );
};

export default DishesList;
