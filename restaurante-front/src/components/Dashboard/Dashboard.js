import React, { useEffect } from "react";
import { Table } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { traerPedidosAction } from "../../state/pedidos.duck";
import Order from "../Order/Order";
const Dashboard = () => {
  const { pedidosDashboard, error } = useSelector((state) => state.pedidos);

  useEffect(() => {
    dispatch(traerPedidosAction());
  }, []);

  const dispatch = useDispatch();

  const { isLoggedIn } = useSelector((state) => state.auth);
  if (!isLoggedIn) {
    return <Redirect to="/login" />;
  }

  if (error?.error.status === 401) {
    localStorage.clear();
    return <Redirect to="/login" />;
  }

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>Lista de pedidos</h3>
      </header>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Estado</th>
            <th>Hora</th>
            <th>Número</th>
            <th>Descripción</th>
            <th>Preio Total</th>
            <th>Forma Pago</th>
            <th>Usuario</th>
            <th>Dirección</th>
          </tr>
        </thead>
        <tbody>
          {pedidosDashboard &&
            pedidosDashboard.map((pedido) => {
              return <Order order={pedido} />;
            })}
        </tbody>
      </Table>
    </div>
  );
};

export default Dashboard;
