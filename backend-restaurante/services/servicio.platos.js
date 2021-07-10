const platosRepo = require("../repositories/repositorio.platos");

module.exports = {
  getAll: async (req, res) => {
    const platos = await platosRepo.getAll();
    res.json(platos);
  },
};
