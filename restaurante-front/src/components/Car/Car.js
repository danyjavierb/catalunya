import React, { useState } from "react";
import { Dash } from "react-bootstrap-icons";
import { Plus } from "react-bootstrap-icons";
import { Nav, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addUnit, emptyCart, removeUnit } from "../../state/cart.duck";
import { enviarPedidoAction } from "../../state/pedidos.duck";

const Car = (props) => {
  const message = "No hay items en el carrito de compras";

  const [formaPago, setFormaPago] = useState("DATAFONO");

  const carItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleAddUnit = (dish) => {
    dispatch(addUnit(dish));
  };

  const handleRemoveUnit = (dish) => {
    dispatch(removeUnit(dish));
  };

  const handleOnSubmitOrder = () => {
    dispatch(enviarPedidoAction(carItems, formaPago)).then((nuevoPedido) => {
      alert(`pedido creado con id ${nuevoPedido.id}`);
      dispatch(emptyCart());
    });
  };

  const getTotal = () => {
    return carItems.reduce((acc, item) => {
      return acc + item.precio * item.cantidad;
    }, 0);
  };

  if (carItems.length == 0) {
    return <h5>{message}</h5>;
  }

  return (
    <Nav
      className="col-md-2 d-none d-md-block bg-light sidebar"
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <div className="sidebar-sticky" />
      {carItems.map((item) => {
        return (
          item.cantidad > 0 && (
            <Nav.Item key={`${item.nombre}-${item.cantidad}`}>
              <h6>{item.nombre}</h6>
              <span>Cantidad: {item.cantidad}</span>
              <Dash
                data-testid={`remove_${item.id}`}
                onClick={() => handleRemoveUnit(item)}
              />
              <Plus
                data-testid={`add_${item.id}`}
                onClick={() => handleAddUnit(item)}
              />
              <br />
              <br />
            </Nav.Item>
          )
        );
      })}
      <div>Total: {carItems.length && getTotal()}</div>
      <div>
        Forma de pago:
        <select
          onChange={(ev) => {
            setFormaPago(ev.target.value);
          }}
        >
          <option value="DATAFONO">DATAFONO</option>
          <option value="EFECTIVO">EFECTIVO</option>
        </select>
      </div>
      <Button onClick={() => handleOnSubmitOrder()}>Hacer pedido</Button>
    </Nav>
  );
};

export default Car;
