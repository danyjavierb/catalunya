const express = require("express");
const expressJwt = require("express-jwt");
const jwt = require("jsonwebtoken");
const helmet = require("helmet");
const cors = require("cors");
const compression = require("compression");
const rateLimit = require("express-rate-limit");
const db = require("./config/db");
const { Usuarios, Roles } = require("./models");

const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors());
server.use(compression());
const JWT_SECRET = "asdfjkhasdjkf782347892314jkasdhasd";
server.use(
  expressJwt({
    secret: JWT_SECRET,
    algorithms: ["HS256"],
  }).unless({ path: ["/login", "/registrar"] })
);

const getUserByCorreoContrasena = async (correo, contrasena) => {
  const user = await Usuarios.findOne({
    attributes: ["id", "nombre", "correo"],
    where: {
      correo,
      contrasena,
    },
  });
  return user;
};

const createUser = async ({
  username,
  nombre,
  correo,
  telefono,
  contrasena,
  direccion,
}) => {
  const defaultRol = await Roles.findOne({
    where: {
      nombre: "user",
    },
  });

  const user = await Usuarios.create({
    username,
    nombre,
    correo,
    telefono,
    contrasena,
    direccion,
    rol_id: defaultRol.id,
  });

  return user;
};

//endpoints

server.post("/login", async (req, res) => {
  const { correo, contrasena } = req.body;

  try {
    const posibleUsuario = await getUserByCorreoContrasena(correo, contrasena);

    if (posibleUsuario !== null) {
      const token = jwt.sign(
        {
          id: posibleUsuario.id,
          correo: posibleUsuario.correo,
          nombre: posibleUsuario.nombre,
        },
        JWT_SECRET,
        { expiresIn: "60m" }
      );

      res.json({ token });
    } else {
      res.status(401).json({ error: "correo o contrasena invalida" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "intente nuevamente mas tarde" });
  }
});

//middleware payload de creacion de usuarios
server.post("/registrar", async (req, res) => {
  const userData = await createUser(req.body);
  res.json(userData);
});

//endpoints

server.listen(3000, () => {
  console.log("servidor iniciado en puerto 3000");
});
