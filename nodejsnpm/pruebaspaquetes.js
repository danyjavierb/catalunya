const { chistes } = require("chistes-aleatorios");

chistes().then((chiste) => {
  console.log(chiste);
});
