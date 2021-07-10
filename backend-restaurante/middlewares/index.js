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

module.exports = { isAdmin };
