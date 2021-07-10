const { Usuarios, Roles } = require("../models");

module.exports = {
  create: async (correo, contrasena) => {
    return await Usuarios.findOne({
      attributes: ["id", "nombre", "correo"],
      where: {
        correo,
        contrasena,
      },
    });
  },
  getByCorreoContrasena: async ({
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

    return await Usuarios.create({
      username,
      nombre,
      correo,
      telefono,
      contrasena,
      direccion,
      rol_id: defaultRol.id,
    });
  },
};
