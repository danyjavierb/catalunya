import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import "./Order.css";

const Order = ({ order }) => {
  const {
    id,
    fecha,
    precio_total,
    estados_orden,
    platos,
    usuario,
    forma_pago,
  } = order;
  const [status, setStatus] = useState(estados_orden.id);
  const dispatch = useDispatch();

  const getDescription = () => {
    let description = "";
    platos.map((plato) => {
      const { cantidad } = plato.pedidos_has_platos;
      description += `${cantidad}x${plato.nombre} `;
    });
    return description;
  };

  const handleChangeStatus = (ev) => {
    setStatus(ev.target.value);
    // TODO actualizar estado
  };

  return (
    <tr>
      <td>
        <Form.Control
          required
          value={status}
          type="text"
          as="select"
          name="status"
          className="status"
          onChange={handleChangeStatus}
        >
          <option value="1">Nuevo</option>
          <option value="2">Confirmado</option>
          <option value="3">Preparando</option>
          <option value="4">Enviando</option>
          <option value="5">Cancelado</option>
          <option value="6">Entregado</option>
        </Form.Control>
      </td>
      <td>{fecha}</td>
      <td>#{id}</td>
      <td>{getDescription()}</td>
      <td>$ {precio_total}</td>
      <td> {forma_pago}</td>
      <td>{usuario && usuario.nombre}</td>
      <td>{usuario && usuario.direccion}</td>
    </tr>
  );
};

export default Order;
