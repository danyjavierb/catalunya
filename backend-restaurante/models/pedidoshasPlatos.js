const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const Pedidos = require("./pedidos");
const Platos = require("./platos");

const PedidosHasPlatos = sequelize.define(
  "pedidos_has_platos",
  {
    cantidad: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    pedido_id: {
      field: "pedido_id",
      type: DataTypes.NUMBER,
      allowNull: false,
      references: {
        model: Pedidos,
        key: "id",
      },
    },
    plato_id: {
      field: "plato_id",
      type: DataTypes.NUMBER,
      allowNull: false,
      references: {
        model: Platos,
        key: "id",
      },
    },
  },
  {
    underscored: true,
    timestamps: false,
    tableName: "pedidos_has_platos",
  }
);

module.exports = PedidosHasPlatos;
