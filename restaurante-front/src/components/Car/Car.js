import React from "react";
import { Dash } from "react-bootstrap-icons";
import { Plus } from "react-bootstrap-icons";
import { Nav, Button } from "react-bootstrap";
import { useSelector } from "react-redux";

const Car = () => {
  const message = "No hay items en el carrito de compras";

  const carItems = useSelector((state) => state.cart);

  const handleAddUnit = (dish) => {
    // TODO
  };

  const handleRemoveUnit = (dish) => {
    // TODO
  };

  const handleOnSubmitOrder = () => {
    // TODO
  };

  const getTotal = () => {
    // TODO
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
            <Nav.Item>
              <h6>{item.nombre}</h6>
              <span>Cantidad: {item.cantidad}</span>
              <Dash onClick={() => handleRemoveUnit(item)} />
              <Plus onClick={() => handleAddUnit(item)} />
              <br />
              <br />
            </Nav.Item>
          )
        );
      })}
      <div>Total: {carItems.length && getTotal()}</div>
      <Button onClick={() => handleOnSubmitOrder()}>Hacer pedido</Button>
    </Nav>
  );
};

export default Car;
