//1. importar express y demas librerias
const express = require("express");

//2. crear la instacia de express
const server = express();

//3. agregar middlewares globales
server.use(express.json());

//4. definir middlewares particulares

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

  //   const estudiantesPais = [];
  //   estudiantes.forEach((est) => {
  //     if (est.pais == parametroPais.toLowerCase()) {
  //       estudiantesPais.push(est);
  //     }
  //   });

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
server.post("/estudiantes", (req, res) => {
  if (!req.body.nombre || !req.body.pais || !req.body.edad) {
    res.status(400).json({ error: "nombre,pais, y edad son obligatorios" });
  } else {
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
  }
});

server.put("/estudiantes/:id", (req, res) => {});

//6 levantar el servidor

server.listen(3000, () => {
  console.log("servidor iniciado en puerto 3000");
});
