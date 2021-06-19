const images = require("cool-images");
const { guardarDatoArchivo } = require("./guardarArchivo");
const moment = require("moment");

const traerImagenes = (cantidad) => {
  const imagenes = images.many(600, 600, cantidad);

  imagenes.forEach((img) => {
    const fecha = moment().format("MMMM do YYYY, h:mm:ss a");
    const log = `URL: ${img} -> ${fecha} `;
    guardarDatoArchivo("log.txt", log);
  });
  guardarDatoArchivo("log.txt", "-------------------------");

  return imagenes;
};

module.exports = traerImagenes;
