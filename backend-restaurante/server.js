const express = require("express");
const expressJwt = require("express-jwt");
const helmet = require("helmet");
const cors = require("cors");
const compression = require("compression");

const authService = require("./services/servicio.autenticacion");
const platosService = require("./services/servicio.platos");

const pedidosRouter = require("./routes/rutas.pedidos");

const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors());
server.use(compression());

const { JWT_SECRET, APP_PORT } = process.env;
server.use(
  expressJwt({
    secret: JWT_SECRET,
    algorithms: ["HS256"],
  }).unless({ path: ["/login", "/registrar"] })
);

//endpoints

server.use("/pedidos", pedidosRouter);

server.post("/login", authService.login);

server.post("/registrar", authService.registrar);

server.get("/platos", platosService.getAll);

server.listen(APP_PORT, () => {
  console.log(`servidor iniciado en puerto ${APP_PORT}`);
});
