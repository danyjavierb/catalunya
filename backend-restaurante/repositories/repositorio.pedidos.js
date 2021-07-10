const {
  PedidosHasPlatos,
  Pedidos,
  Platos,
  Usuarios,
  EstadosOrden,
} = require("../models");

const commonIncludes = [
  { model: Platos },
  { model: Usuarios, attributes: ["nombre", "direccion"] },
  { model: EstadosOrden },
];

module.exports = {
  create: async (forma_pago, platos, user_id) => {
    return await sequelize.transaction(async (t) => {
      const dataPlatos = await Promise.all(
        platos.map(async (plato) => {
          const platoDB = await Platos.findByPk(plato.id);
          return {
            cantidad: plato.cantidad,
            precio: platoDB.precio,
            id: platoDB.id,
          };
        })
      );

      const precio_total = dataPlatos.reduce((acc, plato) => {
        return (acc += parseFloat(plato.precio) * parseInt(plato.cantidad));
      }, 0);
      console.log(precio_total);
      const nuevoPedido = await Pedidos.create(
        {
          fecha: Date.now(),
          precio_total,
          usuario_id: user_id,
          forma_pago,
          estado_orden_id: 1,
        },
        { transaction: t }
      );

      await Promise.all(
        dataPlatos.map(
          async (plato) => {
            await PedidosHasPlatos.create(
              {
                pedido_id: nuevoPedido.id,
                plato_id: plato.id,
                cantidad: plato.cantidad,
              },
              { fields: ["pedido_id", "plato_id", "cantidad"] }
            );
          },
          { transaction: t }
        )
      );
      return nuevoPedido;
    });
  },

  getPedidosUsuario: async (id) =>
    await Pedidos.findAll({
      include: commonIncludes,
      where: { usuario_id: id },
    }),
  getAll: async () =>
    await Pedidos.findAll({
      include: commonIncludes,
    }),
};
