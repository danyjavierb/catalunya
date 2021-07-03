const express = require("express");
const expressJwt = require("express-jwt");
const jwt = require("jsonwebtoken");
const helmet = require("helmet");
const cors = require("cors");
const compression = require("compression");
const rateLimit = require("express-rate-limit");
const db = require("./config/db");
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
  }).unless({ path: ["/login"] })
);

const getUserByCorreoContrasena = async (correo, contrasena) => {
  const user = await db.query(
    `SELECT * FROM usuarios WHERE correo=:correoParam AND contrasena=:conParam`,
    {
      replacements: { correoParam: correo, conParam: contrasena },
      type: db.QueryTypes.SELECT,
    }
  );
  return user;
};

//endpoints

server.post("/login", async (req, res) => {
  const { correo, contrasena } = req.body;

  try {
    const posibleUsuario = await getUserByCorreoContrasena(correo, contrasena);

    if (posibleUsuario.length > 0) {
      const token = jwt.sign(
        {
          id: posibleUsuario[0].id,
          correo: posibleUsuario[0].correo,
          nombre: posibleUsuario[0].nombre,
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

//endpoints

server.listen(3000, () => {
  console.log("servidor iniciado en puerto 3000");
});
