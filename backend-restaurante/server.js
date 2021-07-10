const express = require("express");
const expressJwt = require("express-jwt");
const jwt = require("jsonwebtoken");
const helmet = require("helmet");
const cors = require("cors");
const compression = require("compression");

const {
  Usuarios,
  Roles,
  Platos,
  Pedidos,
  EstadosOrden,
  PedidosHasPlatos,
} = require("./models");

const userRepo = require("./repositories/repositorio.usuario");

const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors());
server.use(compression());

const { JWT_SECRET } = process.env;
server.use(
  expressJwt({
    secret: JWT_SECRET,
    algorithms: ["HS256"],
  }).unless({ path: ["/login", "/registrar"] })
);

const isAdmin = async (req, res, next) => {
  const usuarioActual = await Usuarios.findByPk(req.user.id, {
    include: [Roles],
  });
  if (usuarioActual.role.nombre == "admin") {
    next();
  } else {
    res
      .status(401)
      .json({ error: "usuario debe ser admin para ejecuar esta accion" });
  }
};

const crearPedido = async (forma_pago, platos, user_id) => {
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
};

//endpoints

server.post("/login", async (req, res) => {
  const { correo, contrasena } = req.body;

  try {
    const posibleUsuario = await userRepo.getByCorreoContrasena(
      correo,
      contrasena
    );

    if (posibleUsuario !== null) {
      const token = jwt.sign(
        {
          id: posibleUsuario.id,
          correo: posibleUsuario.correo,
          nombre: posibleUsuario.nombre,
        },
        JWT_SECRET,
        { expiresIn: "60m" }
      );

      res.json({ token });
    } else {
      res.status(401).json({ error: "correo o contrasena invalida" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "intente nuevamente mas tarde" });
  }
});

//middleware payload de creacion de usuarios
server.post("/registrar", async (req, res) => {
  const userData = await userRepo.create(req.body);
  res.json(userData);
});

server.get("/platos", async (req, res) => {
  const platos = await Platos.findAll({ where: { activo: true } });
  res.json(platos);
});

server.get("/dashboard", isAdmin, async (req, res) => {
  const pedidos = await Pedidos.findAll({
    include: [
      { model: Platos },
      { model: Usuarios, attributes: ["nombre", "direccion"] },
      { model: EstadosOrden },
    ],
  });
  res.json(pedidos);
});

server.get("/misPedidos", async (req, res) => {
  const platos = await Pedidos.findAll({
    include: [
      { model: Platos },
      { model: Usuarios, attributes: ["nombre", "direccion"] },
      { model: EstadosOrden },
    ],
    where: { usuario_id: req.user.id },
  });
  res.json(platos);
});

server.post("/pedidos", async (req, res) => {
  const { forma_pago, platos } = req.body;

  const nuevoPedido = await crearPedido(forma_pago, platos, req.user.id);

  res.json(nuevoPedido);
});

//endpoints

server.listen(3000, () => {
  console.log("servidor iniciado en puerto 3000");
});
