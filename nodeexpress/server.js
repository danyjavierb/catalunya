//1. importar express y demas librerias
const express = require("express");

//2. crear la instacia de express
const server = express();

//3. agregar middlewares globales
server.use(express.json());

//4. definir middlewares particulares

const middlewareLogger = (req, res, next) => {
  const { method, path, query, body, params } = req;

  console.log(
    ` METHOD:${method} - PATH:${path} - BODY:${JSON.stringify(
      body
    )} - QUERY:${JSON.stringify(query)} - PARAMS:${JSON.stringify(params)}`
  );
  next();
};

const middlewareBodyEstudiantes = (req, res, next) => {
  if (!req.body.nombre || !req.body.pais || !req.body.edad) {
    res.status(400).json({ error: "nombre,pais, y edad son obligatorios" });
  } else {
    next();
  }
};

server.use(middlewareLogger);

//5. definir endpoints
const estudiantes = [
  {
    id: 1,
    nombre: "dany",
    edad: 30,
    pais: "colombia",
    hobbies: ["pintar", "videojuegos"],
  },
  {
    id: 2,
    nombre: "carlos",
    edad: 15,
    pais: "argentina",
    hobbies: ["leer", "cocinar"],
  },
  {
    id: 3,
    nombre: "camila",
    edad: 35,
    pais: "colombia",
    hobbies: ["leer", "bailar"],
  },
];

// server.get("/estudiantes", (req, res) => {
//   res.status(200);
//   res.json(estudiantes);
// });

server.get("/estudiantes/:idParametro", (req, res) => {
  const idParam = req.params.idParametro;
  const posibleEstudiante = estudiantes.find((est) => est.id == idParam);

  !posibleEstudiante
    ? res.status(400).json({ error: `estudiante con id ${idParam} no existe` })
    : res.status(200).json(posibleEstudiante);
});

// localhost:3000/estudiantes/pais/:algunPais

server.get("/estudiantes/pais/:pais", (request, response) => {
  const parametroPais = request.params.pais;

  const estudiantesPais = estudiantes.filter(
    (estudiantes) => estudiantes.pais == parametroPais.toLowerCase()
  );

  response.status(200);
  response.json(estudiantesPais);
});

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

server.put("/estudiantes/:id", (req, res) => {
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
