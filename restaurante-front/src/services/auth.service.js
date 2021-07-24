import axios from "axios";

const API_URL = "http://localhost:3001";

const login = (email, password) => {
  return axios
    .post(`${API_URL}/login`, {
      correo: email,
      contrasena: password,
    })
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
      }

      return response.data;
    });
};

export default {
  login,
};
