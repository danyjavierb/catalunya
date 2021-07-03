const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const EstadosOrden = sequelize.define(
  "estados_orden",
  {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "estados_orden",
    timestamps: false,
  }
);

module.exports = EstadosOrden;
