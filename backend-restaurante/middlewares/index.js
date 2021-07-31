const expressJwt = require("express-jwt");
const { JWT_SECRET } = process.env;

const isAdmin = async (req, res, next) => {
  const usuarioActual = await Usuarios.findByPk(req.user.id, {
    include: [Roles],
  });
  if (usuarioActual.role.nombre == "admin") {
    next();
  } else {
    res
      .status(401)
      .json({ error: "usuario debe ser admin para ejecuar esta accion" });
  }
};

const authLogin = expressJwt({
  secret: JWT_SECRET,
  algorithms: ["HS256"],
}).unless({ path: ["/login", "/registrar"] });

module.exports = { isAdmin, authLogin };
