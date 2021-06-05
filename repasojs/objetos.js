//Objetos en js

let profesor = {
  nombre: "Dany Bautista",
  edad: 30,
  lenguajes: ["java", "js", "scala"],
  imprimirPres: () => {
    return "dany es un ingeniero de sofware.....";
  },
};

// operaciones con objetos

// acceder al valor de una llave
console.log(profesor.nombre);
console.log(profesor["nombre"]);

let lenguajesDeDany = profesor.lenguajes;

let funcionDescripcionDany = profesor.imprimirPres;

console.log(`${profesor.nombre} usa ${profesor.lenguajes.join(",")}`);

// obetener llaves de un objeto

console.log(Object.keys(profesor));

//obtener valores

console.log(Object.values(profesor));

// obtener el nombre de la manera ams dificil posible

console.log(
  profesor[Object.keys(profesor)[Object.keys(profesor).indexOf("nombre")]]
);

//objetos complejos

const programadores = [
  {
    id: 1,
    nombre: "Dany Bautista",
    edad: 20,
    lenguajes: ["java", "js", "scala"],
    imprimirPres: () => {
      return "dany es un ingeniero de sofware.....";
    },
  },
  {
    id: 2,
    nombre: "Camila Sarmiento",
    edad: 30,
    lenguajes: ["js", "ts", "rescript"],
    imprimirPres: () => {
      return "Camila Sarmiento es programadora fronent.....";
    },
  },
  {
    id: 3,
    nombre: "Jorge Castellanos",
    edad: 30,
    lenguajes: ["Python", "Nodejs", "Ruby", "java"],
    imprimirPres: () => {
      return "Jorge es un programador backend.....";
    },
  },
];

// escribir una funcion que retorne un programador por id
const traerProgramadorId = (arr, valor, tag = "id") => {
  let salida;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][tag] === valor) {
      salida = arr[i];
      break;
    }
  }
  return salida;
};
console.log(traerProgramadorId(programadores, 1));
//  {
//     id: 1,
//     nombre: "Dany Bautista",
//     edad: 30,
//     lenguajes: ["java", "js", "scala"],
//     imprimirPres: () => {
//       return "dany es un ingeniero de sofware.....";
//     },
//   }
const traerProgramadoresPorEdad = (arr, valor, tag = "id") => {
  let salida = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][tag] === valor) {
      salida.push(arr[i]);
    }
  }
  return salida;
};
console.log(traerProgramadoresPorEdad(programadores, 20, "edad"));

const traerNombresProgramadores = (arr) => {
  let salida = [];
  for (i = 0; i < arr.length; i++) {
    salida.push(arr[i]["nombre"]);
  }
  return salida;
};

console.log(traerNombresProgramadores(programadores)); // [dany,Camila,Jorge]

//buscarProgramadoresPorLenguaje(programadores, "js");

// [{
//     id: 1,
//     nombre: "Dany Bautista",
//     edad: 20,
//     lenguajes: ["java", "js", "scala"],
//     imprimirPres: () => {
//       return "dany es un ingeniero de sofware.....";
//     },
//   },
//   {
//     id: 2,
//     nombre: "Camila Sarmiento",
//     edad: 30,
//     lenguajes: ["js", "ts", "rescript"],
//     imprimirPres: () => {
//       return "Camila Sarmiento es programadora fronent.....";
//     },
//   }]

const traerProgramadoresPorLenguaje = (arr, valor) => {
  let salida = [];
  for (i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i]["lenguajes"].length; j++) {
      if (arr[i]["lenguajes"][j] === valor) {
        salida.push(arr[i]);
      }
    }
  }
  return salida;
};

console.log(traerProgramadoresPorLenguaje(programadores, "js"));

function getNombres(programadores) {
  let salida = [];
  programadores.forEach((programador) => {
    salida.push(programador.nombre);
  });
  return salida;
}

console.log(getNombres(programadores));
