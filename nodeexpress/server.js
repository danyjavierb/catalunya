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

server.get("/estudiantes", (req, res) => {
  res.status(200);
  res.json(estudiantes);
});

server.get("/estudiantes/:idParametro", (req, res) => {
  const idParam = req.params.idParametro;
  const posibleEstudiante = estudiantes.find((est) => est.id == idParam);

  !posibleEstudiante
    ? res.status(400).json({ error: `estudiante con id ${idParam} no existe` })
    : res.status(200).json(posibleEstudiante);
});

//6 levantar el servidor

server.listen(3000, () => {
  console.log("servidor iniciado en puerto 3000");
});
