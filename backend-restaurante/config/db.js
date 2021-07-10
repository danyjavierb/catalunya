const { Sequelize } = require("sequelize");

const { DB_USER, DB_PASS, DB_HOST, DB_NAME, DB_PORT } = process.env;

const conString = `mysql://${DB_USER}${
  DB_PASS && `:${DB_PASS}`
}@${DB_HOST}:${DB_PORT}/${DB_NAME}`;

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
