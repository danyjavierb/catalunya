const router = require("express").Router();
const pedidosService = require("../services/servicio.pedidos");
const { isAdmin } = require("../middlewares");

router.get("/", isAdmin, pedidosService.getDashboard);
router.post("/", pedidosService.crearPedido);
router.get("/misPedidos", pedidosService.getPedidosUsuario);

module.exports = router;
