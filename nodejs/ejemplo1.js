const { guardarDatoArchivo } = require("./guardarArchivo");

const estudiantes = [
  {
    id: 1,
    nombre: "dany",
    edad: 30,
  },
  {
    id: 2,
    nombre: "carlos",
    edad: 15,
  },
  {
    id: 3,
    nombre: "camila",
    edad: 35,
  },
];

const nombresMayus = estudiantes.map((est) => est.nombre.toUpperCase());

nombresMayus.forEach((nom) => {
  console.log(`guardando dato ${nom} `);
  guardarDatoArchivo("nombres.txt", nom);
});
