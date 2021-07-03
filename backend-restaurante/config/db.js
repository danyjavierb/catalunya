const { Sequelize } = require("sequelize");

const USER = "root";
const PASS = "password";
const HOST = "localhost";
const DB = "restaurante";
const PORT = 3306;

const conString = `mysql://${USER}:${PASS}@${HOST}:${PORT}/${DB}`;

const instanciaSequelize = new Sequelize(conString, {
  operatorAliases: false,
});

instanciaSequelize
  .authenticate()
  .then(() => {
    console.log("conexion con db exitosa");
  })
  .catch((e) => {
    console.log(e.message);
  });

module.exports = instanciaSequelize;
