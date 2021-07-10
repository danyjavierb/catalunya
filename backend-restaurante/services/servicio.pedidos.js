const pedidosRepo = require("../repositories/repositorio.pedidos");

module.exports = {
  getDashboard: async (req, res) => {
    const pedidos = await pedidosRepo.getAll();
    res.json(pedidos);
  },

  getPedidosUsuario: async (req, res) => {
    const pedidos = await pedidosRepo.getPedidosUsuario(req.user.id);
    res.json(pedidos);
  },

  crearPedido: async (req, res) => {
    const { forma_pago, platos } = req.body;
    const nuevoPedido = await pedidosRepo.create(
      forma_pago,
      platos,
      req.user.id
    );
    res.json(nuevoPedido);
  },
};
