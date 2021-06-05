// interactuar con el arbol de elementos del sitio

// Seleccionar elementos del dom

//seleccion del primer elemento que coincida con el selector
let divSaludo = document.querySelector(".saludo");
console.log(divSaludo);

let todosLosDivsSaludos = document.querySelectorAll(".saludo");
console.log(todosLosDivsSaludos);

let elementoPorId = document.querySelector("#lista");
console.log(elementoPorId);

// atributos de un elemento

let inputNumero = document.querySelector("#numero1");

console.log(parseInt(inputNumero.value));

inputNumero.style = "border: red solid 1px";
inputNumero.value = 123123;

inputNumero.classList.add("colorFont");

todosLosDivsSaludos.forEach((div) => {
  //div.classList.add("colorFont");
});

inputNumero.classList.remove("colorFont");

// crearlos

let nuevoElementoDiv = document.createElement("div");
//agregar contenido a un elemento

nuevoElementoDiv.innerHTML = `<h1>H1 interno</h1>`;

todosLosDivsSaludos[1].appendChild(nuevoElementoDiv);

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

const traerNombresProgramadores = (arr) => {
  let salida = [];
  for (i = 0; i < arr.length; i++) {
    salida.push(arr[i]["nombre"]);
  }
  return salida;
};

let nombres = traerNombresProgramadores(programadores);

let listaHtml = document.querySelector("#lista");

programadores.forEach((prog) => {
  let liNombre = document.createElement("li");
  liNombre.classList.add("colorFont");
  liNombre.innerHTML = `
  <a href="#" > ${prog.nombre} </a>
  </br>
  <span>${prog.imprimirPres()} </span>
  `;
  listaHtml.appendChild(liNombre);
});

//elementos les podemos agregar escuchadores de eventos

let botonCalcular = document.querySelector("#calcular");

botonCalcular.addEventListener("click", () => {
  let value1 = parseInt(document.querySelector("#numero1").value);
  let value2 = parseInt(document.querySelector("#numero2").value);
  let resultadoCalculo = value1 + value2;
  console.log("calculando");

  document.querySelector("#resultado").value = resultadoCalculo;
});

//hacer una calculadora en html js
