// Callbacks

//una funcion q se pasa como argumento de otra funcion

const saludar = () => {
  console.log("hola como van");
};

setTimeout(saludar, 0);

console.log("hola antes");

// Promesas

const urlPerros = "https://dog.ceo/api/breeds/image/random/10";

const promesaPerros = fetch(urlPerros);

promesaPerros
  .then((response) => response.json())
  .then((respuestaPerros) => {
    const perrosImgs = respuestaPerros.message
      .map((img) => {
        return `<img src= '${img}' >`;
      })
      .join("");

    // document.querySelector("#containerPerros").innerHTML = perrosImgs;
  })
  .catch((e) => {
    console.log(e.message);
  });

// funciones asincronas async / await

const dibujarPerros = async (urlPerros) => {
  const responsePerros = await fetch(urlPerros);
  const dataPerros = await responsePerros.json();
  const perrosImgs = dataPerros.message
    .map((img) => {
      return `<img src= '${img}' >`;
    })
    .join("");

  document.querySelector("#containerPerros").innerHTML = perrosImgs;
};

//dibujarPerros(urlPerros).catch((e) => console.log(e.message));
