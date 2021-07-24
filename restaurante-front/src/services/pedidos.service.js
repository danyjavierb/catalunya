import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:3010";

const crearPedido = (cartItems, formaPago) => {
  return axios
    .post(
      `${API_URL}/pedidos`,
      {
        forma_pago: formaPago,
        platos: cartItems,
      },
      { headers: authHeader() }
    )
    .then((response) => response.data)
    .catch((err) => {
      console.log(err);
      throw err;
    });
};
const traerPedidos = () => {
  return axios
    .get(`${API_URL}/pedidos`, { headers: authHeader() })
    .then((response) => response.data)
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

export default {
  crearPedido,
  traerPedidos,
};
