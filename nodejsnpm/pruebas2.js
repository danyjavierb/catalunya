const traerImagenes = require("./traerImagenes");

setInterval(() => {
  const randomImages = Math.floor(Math.random() * 10) + 1;
  traerImagenes(randomImages);
}, 5000);
