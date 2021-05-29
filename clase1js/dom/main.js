const estudiantes = [
  {
    id: 1,
    nombre: "Zee",
    edad: 20,
    hobbies: ["programar", "bailar"],
  },
  {
    id: 2,
    nombre: "Jassem",
    edad: 15,
    hobbies: ["programar", "jugar LoL"],
  },
  {
    id: 3,
    nombre: "Pierre",
    edad: 20,
    hobbies: ["enseñar", "programar"],
  },
  {
    id: 4,
    nombre: "Yeins",
    edad: 17,
    hobbies: ["cocinar"],
  },
];

// traer elemento por ID
const title = document.getElementById("title");

// traer elementos  por nombre de clase
const parrafos = document.getElementsByClassName("parrafo");

// traer elementos por tag name

const parrafosP = document.getElementsByTagName("p");

// usando selectores de css

const elemById = document.querySelector("#title");

const elemByClass = document.querySelector(".parrafo");

const elemByTagName = document.querySelector("p");

// especificidad
// pueden usar selectores de css para traer elementos del DOM

const ejem1 = document.querySelector("main p");

const ejem2 = document.querySelector("p.rojo");

const ejem3 = document.querySelector("p.parrafo");

console.log(ejem3);

const ejem4 = document.querySelector(".parrafo.rojo");

// todos los elementos que coincidan con el selector

const ejem5 = document.querySelectorAll("p.parrafo");
console.log(ejem5);

// modificando elementos

document.querySelector("#title").innerHTML = "Star Wars";

document.querySelector("#title").innerHTML =
  "<a href='google.com'>Ir a google</a>";

document.querySelector("#title a").href = "http://facebook.com";

// const elementoSeleccinado = document.querySelector(".parrafo.rojo");

// elementoSeleccinado.style.border = "solid 1px red";
// elementoSeleccinado.style.color = "green";

// Agregar elementos nuevos

// const nombresEstudiantes = estudiantes.map((est) => est.nombre);

// const estudianteNombreH1 = nombresEstudiantes.map((nombre) => {
//   const div = document.createElement("div");
//   div.innerHTML = `<h1> ${nombre} </h1>`;
//   return div;
// });

// const mainContent = document.querySelector(".mainContent");

// estudianteNombreH1.forEach((elem) => {
//   mainContent.appendChild(elem);
// });

// Pinten una tabla
// id   ||  nombre || edad    || hobbies
// 1    ||  Dany   || 30 ańos ||  . cantar . bailar

const table = document.createElement("table");
const estudianteRows = estudiantes.map((estudiante) => {
  const hobbieString = estudiante.hobbies.map((hobbie) => `<li>${hobbie}</li>`);
  const tr = `<tr> <td> ${estudiante.id} </td>
  <td> ${estudiante.nombre} </td>
  <td> ${estudiante.edad} años</td>
  <td> <ul>${hobbieString.join("")}</ul> </td>`;
  return tr;
});

const mainContent2 = document.querySelector(".mainContent");

table.innerHTML =
  "<tr> <td> ID </td> <td> NOMBRE </td> <td> EDAD </td> <td> HOBBIES </td></tr>" +
  estudianteRows.join("");

mainContent2.appendChild(table);

// Carlos

// const $cuerpoTabla = document.querySelector("#cuerpoTabla");
// // Recorrer todos los productos
// estudiantes.forEach((estudiantes) => {
//   // Crear un <tr>
//   const $tr = document.createElement("tr");
//   // Creamos el <td> de id y lo adjuntamos a tr
//   let $tdId = document.createElement("td");
//   $tdId.textContent = estudiantes.id; // el textContent del td es el id
//   $tr.appendChild($tdId);
//   // Creamos el <td> de nombre y lo adjuntamos a tr
//   let $tdNombre = document.createElement("td");

//   $tdNombre.textContent = estudiantes.nombre; // el textContent del td es el nombre
//   $tr.appendChild($tdNombre);
//   // El td de edad
//   let $tdPrecio = document.createElement("td");
//   $tdPrecio.textContent = estudiantes.edad;
//   $tr.appendChild($tdPrecio);
//   // El td del hobbies
//   let $tdCodigo = document.createElement("td");
//   $tdCodigo.textContent = estudiantes.hobbies;
//   $tr.appendChild($tdCodigo);

//   $cuerpoTabla.appendChild($tr);
// });

const button = document.querySelector("#crear");

const crearElementoHanlder = (ev) => {
  const div = document.createElement("div");
  const nombreInput = document.querySelector("#nombre").value;
  div.innerHTML = `<h1> HOLA ${nombreInput} </h1>`;
  document.querySelector(".mainContent").appendChild(div);
};

button.addEventListener("click", crearElementoHanlder);
