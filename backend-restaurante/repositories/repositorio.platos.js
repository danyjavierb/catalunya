const { Platos } = require("../models");

module.exports = {
  getAll: async () => await Platos.findAll(),
};
