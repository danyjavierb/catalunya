import axios from "axios";
import authHeader from "./auth-header";
const API_URL = process.env.API_URL || "http://localhost:3010";

const traerPlatos = () => {
  return axios
    .get(`${API_URL}/platos`, { headers: authHeader() })
    .then((response) => response.data)
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

export default {
  traerPlatos,
};
