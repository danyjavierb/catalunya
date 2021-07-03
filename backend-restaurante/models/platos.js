const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Platos = sequelize.define(
  "platos",
  {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    precio: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    activo: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    imagen: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "platos",
    underscored: true,
  }
);

module.exports = Platos;
