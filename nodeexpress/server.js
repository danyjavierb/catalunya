//1. importar express y demas librerias
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const compression = require("compression");
const rateLimit = require("express-rate-limit");

const {
  middlewareBodyEstudiantes,
  middlewareExistePais,
  middlewareLogger,
  validarIdMiddleware,
} = require("./middlewares");
const estudiantes = require("./estudiantes");
//2. crear la instacia de express
const server = express();

//3. agregar middlewares globales
server.use(express.json());
server.use(helmet());
server.use(cors());
server.use(compression());

//3.5 definir politica de rates

const ratePolicy = rateLimit({
  windowMs: 10000,
  max: 5,
  message: { error: "usted ha excedido el limite de peticiones espere 10s" },
});

//4. definir middlewares particulares

server.use(middlewareLogger);
server.use(ratePolicy);

server.get("/estudiantes/:id", validarIdMiddleware, (req, res) => {
  const idParam = req.params.id;
  const posibleEstudiante = estudiantes.find((est) => est.id == idParam);
  res.status(200).json(posibleEstudiante);
});

// localhost:3000/estudiantes/pais/:algunPais

server.get(
  "/estudiantes/pais/:pais",
  middlewareExistePais,
  (request, response) => {
    const parametroPais = request.params.pais;

    const estudiantesPais = estudiantes.filter(
      (estudiantes) => estudiantes.pais == parametroPais.toLowerCase()
    );

    response.status(200);
    response.json(estudiantesPais);
  }
);

server.get("/estudiantes", (req, res) => {
  //basepath/estudiantes -> estudiantes
  //basepath/estudiantes?pais=algunPais -> estudiantesPais

  if (req.query.pais) {
    const parametroPais = req.query.pais;

    const estudiantesPais = estudiantes.filter(
      (estudiantes) => estudiantes.pais == parametroPais.toLowerCase()
    );
    res.status(200).json(estudiantesPais);
  } else {
    res.status(200).json(estudiantes);
  }
});

//crear estudiantes
server.post("/estudiantes", middlewareBodyEstudiantes, (req, res) => {
  const nuevoEstudiante = {
    nombre: req.body.nombre,
    pais: req.body.pais,
    edad: req.body.edad,
    hobbies: req.body.hobbies || [],
    id: estudiantes.length + 1,
  };

  estudiantes.push(nuevoEstudiante);
  res.status(201);
  res.json(nuevoEstudiante);
});

server.put("/estudiantes/:id", validarIdMiddleware, (req, res) => {
  const id = req.params.id;
  const indexEstudiante = estudiantes.findIndex((est) => est.id == id);

  if (indexEstudiante !== -1) {
    estudiantes[indexEstudiante] = {
      id: id,
      nombre: req.body.nombre || estudiantes[indexEstudiante].nombre,
      pais: req.body.pais || estudiantes[indexEstudiante].pais,
      edad: req.body.edad || estudiantes[indexEstudiante].edad,
      hobbies: req.body.hobbies || [],
    };

    res.status(200).json(estudiantes[indexEstudiante]);
  } else {
    res.status(400).json({ error: `estudiante con id ${id} no existe` });
  }
});

server.delete("/estudiantes/:id", (req, res) => {
  const idBorrar = req.params.id;
  //const idxEliminar = estudiantes.map((est) => est.id).indexOf(idBorrar);
  const idxEliminar = estudiantes.findIndex((est) => est.id == idBorrar);
  const eliminado = estudiantes.splice(idxEliminar, 1);

  res.status(200).json(eliminado);
});

//6 levantar el servidor

server.listen(3000, () => {
  console.log("servidor iniciado en puerto 3000");
});
