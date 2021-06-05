//operaciones tradicionales

//crear
let nombres = ["dany", "javier", "carlos"];
//                 0         1       2

//acceder a elementos de un array usando indice
console.log(nombres[0]); // "dany"
console.log(nombres[1]); // "javier"
console.log(nombres[nombres.length - 1]); // "carlos"

console.log(nombres.length); //3

// iterar sobre un array

// imperativa

for (let index = 0; index < nombres.length; index++) {
  const nombre = nombres[index];
  // console.log(index, nombre);
}

// declarativa
const imprimir = (nombre, i) => {
  console.log(i, nombre);
};

nombres.forEach(imprimir);

// agregar un elemento al final del array

nombres.push("Camila");

nombres.forEach(imprimir);

// quitar elementos al inicio

let eliminadoInicio = nombres.shift();
console.log(`elemento eliminado ${eliminadoInicio}`);
nombres.forEach(imprimir);

//eliminar elemento del el final del arreglo

let eliminadofinal = nombres.pop();
console.log(`elemento eliminado ${eliminadofinal}`);
nombres.forEach(imprimir);

//encontrar un indice

let indexFound = nombres.indexOf("carlos");

console.log(`carlos esta en la posicion ${indexFound}`);

// eliminar elementos por indice

let eliminadoCarlos = nombres.splice(indexFound, 1);
console.log(`elemento eliminado ${eliminadoCarlos}`);
nombres.forEach(imprimir);

// string a arreglo

let texto = "hola soy un string";

let textoArray = texto.split(" ");
console.log(textoArray);

console.log(textoArray.join(" "));

//ejercicios

console.log(alternateCaps("I am a string")); // I aM a StRiNg
console.log(onlyUnique([1, 1, 2, 3, 3, 4, 4, 5])); // [2, 5]
console.log(splitByOddAndEven([2, 3, 7, 6, 2, 4, 9])); // [[2,4,6][3,7,9]]

//bonus

const alphabetize = (someArray) => {
  // your code
};

const jumbledAlphabetically = [
  ["e", "d", "f"],
  ["a", "c", "b"],
  ["m", "o", "n"],
];
console.log(alphabetize(jumbledAlphabet));
// [["a", "b", "c"], ["d", "e", "f"], ["m", "n", "o"]]
