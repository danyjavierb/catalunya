const EstadosOrden = require("./estadosOrden");
const Pedidos = require("./pedidos");
const PedidosHasPlatos = require("./pedidoshasPlatos");
const Platos = require("./platos");
const Roles = require("./roles");
const Usuarios = require("./usuarios");

Usuarios.belongsTo(Roles, {
  foreignKey: "rol_id",
});

Usuarios.hasMany(Pedidos, {
  foreignKey: "usuario_id",
});

Pedidos.belongsTo(Usuarios, {
  foreignKey: "usuario_id",
});

Pedidos.belongsTo(EstadosOrden, {
  foreignKey: "estado_orden_id",
});

//el 40% del proyecot
Pedidos.belongsToMany(Platos, {
  through: PedidosHasPlatos,
});

module.exports = {
  PedidosHasPlatos,
  Pedidos,
  Usuarios,
  Platos,
  Roles,
  EstadosOrden,
};
