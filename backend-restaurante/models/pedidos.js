const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Pedidos = sequelize.define(
  "pedidos",
  {
    fecha: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    precio_total: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    forma_pago: {
      type: DataTypes.ENUM("DATAFONO", "EFECTIVO"),
      allowNull: false,
    },
  },
  {
    timestamps: false,
    tableName: "pedidos",
    underscored: true,
  }
);

module.exports = Pedidos;
