const { guardarDatoArchivo } = require("./guardarArchivo");

//log operacion

const log = (x, y, op, res) => {
  guardarDatoArchivo("log.txt", `${x}${op}${y}=${res}`);
};

//suma

const suma = (x, y) => {
  const resultado = x + y;
  log(x, y, "+", resultado);
  return resultado;
};

//resta
const resta = (x, y) => {
  const resultado = x - y;
  log(x, y, "-", resultado);
  return resultado;
};

//multiplicacion
const multiplicacion = (x, y) => {
  const resultado = x * y;
  log(x, y, "*", resultado);
  return resultado;
};
//division
const division = (x, y) => {
  const resultado = x / y;
  log(x, y, "/", resultado);
  return resultado;
};
//exportarlas

module.exports = {
  suma,
  resta,
  multiplicacion,
  division,
};
