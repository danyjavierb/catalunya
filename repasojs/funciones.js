//definicion de funcion
//funcion con retorno
function cuadrado(x) {
  return x * x;
}

//funcion con retorno
let cuadrado2 = (x) => x * x;

//funciones sin retorno

let saludar = (nombre) => {
  console.log(nombre);
};

// console.log(saludar("dany"));

// 3 * 3 * 3
function potencia(base, exp) {
  let resultado = 1;
  for (let i = 1; i <= exp; i++) {
    resultado = resultado * base;
  }
  return resultado;
}

let potencia2 = (base, exp) => {
  let resultado = 1;
  for (let i = 1; i <= exp; i++) {
    resultado = resultado * base;
  }
  return resultado;
};

// console.log(potencia(3, 4)); //-> 3 * 3 * 3 * 3
// console.log(potencia2(2, 4)); //-> 2 * (2 * 2 * 2)

// let valorString = prompt("ingrese valor");

// console.log(valorString.length);
// console.log("dany".length);

// formas de acceso a caracteres

let pais = "colombia";
//          01234567

// console.log(pais.charAt(0));
// console.log(pais.charAt(pais.length - 1));

// console.log(pais[0]); //c
// console.log(pais[pais.length - 1]); // a

// console.log(pais.indexOf("c")); // 0

// console.log(pais.substring(0, 2)); //co
// console.log(pais.substring(1, 2)); //o

// console.log(pais.search("co")); // 0

// console.log(pais.search("bia")); // 5

const reverseString = (texto) => {
  salida = "";
  for (let i = texto.length; i >= 0; i--) {
    salida += texto.charAt(i);
  }
  return salida;
};

// funcion que se llame reverseString(string)
console.log(reverseString("I am a string")); // gnirts a ma I

function isPalindrome(cadena) {
  return cadena == reverseString(cadena);
}

// funcion que determine si un string es palindromo
console.log("racecar", isPalindrome("racecar")); // true
console.log("apple", isPalindrome("apple")); // false

function capitalizeFirstLetterOfEachWord(cadena) {
  let cadenaUp = cadena[0].toUpperCase();
  for (let i = 1; i <= cadena.length - 1; i++) {
    if (cadena[i] == " ") {
      cadenaUp += cadena[i];
      cadenaUp += cadena[i + 1].toUpperCase();
      i++;
    } else {
      cadenaUp += cadena[i];
    }
  }
  return cadenaUp;
}

// // funcion que capitalize la primera letra de cada palabra despues de un espacio
console.log(capitalizeFirstLetterOfEachWord("i am a string")); // I Am A String
