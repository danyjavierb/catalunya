const { JWT_SECRET } = process.env;
const jwt = require("jsonwebtoken");
const userRepo = require("../repositories/repositorio.usuario");

module.exports = {
  login: async (req, res) => {
    const { correo, contrasena } = req.body;

    try {
      const posibleUsuario = await userRepo.getByCorreoContrasena(
        correo,
        contrasena
      );

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
  },
  registrar: async (req, res) => {
    const userData = await userRepo.create(req.body);
    res.json(userData);
  },
};
