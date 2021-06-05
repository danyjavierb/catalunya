let nombre = "Javier";
let apellido = "Castellanos";

let nombreYApellido = `${nombre} ${apellido}`;

nombre = "Leonardo";

let numero = 10;

let palabraPalabraPalabra; // camelCalse
let palabra_palabra;

//let else;

//let nombrePrompt = prompt("Ingrese nombre");
//console.log("el nombre que ingreso el usuario es", nombrePrompt);

// controlar el flujo de la aplicacion
// Condicionales

//let edadUsuario = prompt("ingrese su edad");
//let condicion = !Number.isNaN(parseInt(edadUsuario));

//console.log(condicion);

// if (condicion) {
//   if (parseInt(edadUsuario) < 18) {
//     //alert("el usuario no puede continuar es menor de edad");
//   } else {
//     //alert("el usuario  puede continuar es mayor de edad");
//   }
// } else {
//   //alert("Ingrese un numero no caracteres");
// }

// flujo iterativo

// while

//let numeroCondicion = 1;
// while (numeroCondicion <= 20) {
//   if (numeroCondicion % 2 === 0) {
//     // console.log("par", numeroCondicion);
//   } else {
//     //console.log("impar", numeroCondicion);
//   }
//   // numeroCondicion = numeroCondicion + 1;
// }

// for

// for (let numeroCondicion = 1; numeroCondicion <= 20; numeroCondicion++) {
//   console.log(numeroCondicion);
//   if (numeroCondicion == 10) {
//     break;
//   }
// }

for (let i = 0; i <= 10; i++) {
  for (let j = 0; j <= 10; j++) {
    //console.log("i", i, "j", j);
  }
}

//switch

// switch (prompt("ingrese nombre")) {
//   case "dany":
//     alert("el profesor");
//     break;
//   case "leonardo":
//     alert("el programador");
//     break;
//   default:
//     alert("usuario no perfilado");
//     break;
// }

// hasta donde el usuario quiera
// *  1
// **
// ***
// ****
// *****
// ******
// ******* 7
// *******
// ******
// *****
// ****
// ***
// **
// *
// un programa q sume los numeros multiplos de 3 y 5 hasta donde el usuario escoja

//10
// 1
// 2
// 3 3
// 4
// 5 8
// 6 14
// 7
// 8
// 9 14 + 9
// // 10
// let niveles = parseInt(prompt("ingrese niveles"));
// let incremento = 0;
// let asteriscos = "*";
// while (incremento < niveles) {
//   //console.log(asteriscos);
//   incremento = incremento + 1;
//   //asteriscos = `${asteriscos}*`;
//   //asteriscos += "*"
//   asteriscos = asteriscos + "*";
// }

// for (let asteriscos = "*"; asteriscos.length <= niveles; asteriscos += "*") {
//   console.log(asteriscos);
// }

// for (let i = 0; i < niveles; i++) {
//   console.log(asteriscos);
//   asteriscos = asteriscos + "*";
// }

// let n = parseInt(prompt("hasta que numero desea la suma"));
// let suma = 0;
// for (let i = 0; i < n; i++) {
//   if (i % 3 == 0 || i % 5 == 0) {
//     suma = suma + i;
//   }
// }
// console.log(suma);

/**
 * Escribe un programa que use console.log para imprimir todos los números de 1 a 100, 
 * con dos excepciones. Para números divisibles por 3, imprime "Fizz" en lugar del número, 
 * y para los números divisibles por 5 (y no 3), imprime "Buzz" en su lugar.

   Cuando tengas eso funcionando, modifica tu programa para imprimir "FizzBuzz", 
   para números que sean divisibles entre 3 y 5 (y aún imprimir "Fizz" o "Buzz" 
   para números divisibles por solo uno de ellos).

   (Esta es en realidad una pregunta de entrevista que se ha dicho 
    elimina un porcentaje significativo de candidatos a programadores. 
    Así que si la puedes resolver, tu valor en el mercado laboral acaba de subir).
 * 
 * 
 * 
 */
// ingrese n
// nxn
/*      01234567
         # # # # 0
        # # # #  1
         # # # # 2
        # # # #  3
         # # # # 4
        # # # #  5
         # # # # 6
        # # # #  7

*/

// hasta donde el usuario quiera
// *  1
// **
// ***
// ****
// *****
// ******
// ******* 7
// *******
// ******
// *****
// ****
// ***
// **
// *

// const numFinal = 100;
// let text = "";
// for (let i = 1; i < 100; i++) {
//   if (i % 15 === 0) {
//     console.log(`${i} FIZZ BUZZ`);
//   } else if (i % 3 === 0) {
//     console.log(`${i} fizz`);
//   } else if (i % 5 === 0) {
//     console.log(`${i} buzz`);
//   } else {
//     console.log(i);
//   }
// }
const numFinal = 100;
let text = "";

// for (let i = 1; i <= numFinal; i++) {
//   text += i % 3 === 0 ? "Fizz" : "";
//   text += i % 5 === 0 ? "Buzz" : "";

//   console.log(text === "" ? i : text);
//   text = "";
// }

// for (let i = 1; i <= 100; i++) {
//   if (i % 3 == 0 && i % 5 == 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 == 0) {
//     console.log("Fizz");
//   } else if (i % 5 == 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }
// let valor = parseInt(prompt("Ingrese Tamaño del Tablero (NxN) : "));
// let tablero = "";
// for (let i = 0; i < valor; i++) {
//   for (let j = 0; j < valor; j++) {
//     if ((i + j) % 2 === 0) {
//       tablero += " ";
//     } else {
//       tablero += "#";
//     }
//   }
//   tablero += "\n";
// }

// console.log(tablero);

const n = prompt("Ingrese n?");
let patron = "";
let inicio = "";
let fin = "";
for (let s = "*"; s.length <= n; s += "*") {
  inicio += s + "\n";
  fin = `${s}\n` + fin;
}
console.log(inicio + fin);
