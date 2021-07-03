const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Roles = sequelize.define(
  "roles",
  {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "roles",
    timestamps: false,
  }
);

module.exports = Roles;
