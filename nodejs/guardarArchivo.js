//ver como importar librerias del sistema

const fs = require("fs");

const guardarDatoArchivo = (nombreArchivo, texto) => {
  try {
    fs.appendFileSync(nombreArchivo, `${texto}\n`);
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = { guardarDatoArchivo: guardarDatoArchivo };
