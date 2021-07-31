const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const compression = require("compression");
const authService = require("./services/servicio.autenticacion");
const platosService = require("./services/servicio.platos");
const pedidosRouter = require("./routes/rutas.pedidos");
const { validarDataRegistro } = require("./middlewares");

const { authLogin } = require("./middlewares");

const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors());
server.use(compression());

server.use(authLogin);

//endpoints

server.use("/pedidos", pedidosRouter);

server.post("/login", authService.login);

server.post("/registrar", validarDataRegistro, authService.registrar);

server.get("/platos", platosService.getAll);

module.exports = server;
