import React, { useEffect } from "react";
import { CartPlusFill } from "react-bootstrap-icons";
import { CartPlus } from "react-bootstrap-icons";
import "./Dish.css";
import { Nav } from "react-bootstrap/Nav";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, addUnit } from "../../state/cart.duck";

const DishesList = ({ dish }) => {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart);

  const handleAddToCart = (dish) => {
    const isInCart = cartItems.some((item) => item.id == dish.id);
    if (isInCart) {
      dispatch(addUnit(dish));
    } else {
      const { id, nombre, precio } = dish;
      const cartItem = {
        id,
        nombre,
        precio,
        cantidad: 1,
      };
      dispatch(addToCart(cartItem));
    }
  };

  // useEffect(() => {
  //   console.log(dish);
  // }, []);

  return (
    <div className="dish">
      <img src={dish.imagen} />
      <h4>{dish.nombre}</h4>
      <h6>{dish.precio}</h6>

      <span className="addToCart">
        Agregar al carrito
        {dish.activo ? (
          <CartPlusFill onClick={() => handleAddToCart(dish)} />
        ) : (
          <CartPlus />
        )}
      </span>
    </div>
  );
};

export default DishesList;
