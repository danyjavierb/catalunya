//const templatePerroCard = ` <div class="col-md-4">

//</div>`;

const getPerrosElements = (perrosData) => {
  const contenedoresPerros = perrosData.data.map((gif) => {
    const contenedor = document.createElement("div");
    contenedor.classList.add("col-md-4");
    contenedor.innerHTML = `
        <div class="card mb-4 box-shadow">
        <img
          class="card-img-top"
          src="${gif.images.fixed_width.url}"
          alt="Card image cap"
        />
        <div class="card-body">
          <p class="card-text">
            <a
              href=" ${gif.images.fixed_width.url}"
            >
              ${gif.images.fixed_width.url}
            </a>
          </p>
        </div>
      </div>`;
    return contenedor;
  });

  return contenedoresPerros;
};

const botonMostarPerros = document.querySelector("#mostrarFotos");
let offset = 0;
const limit = 10;

const mostrarFotosHandler = async (ev) => {
  ev.preventDefault();

  const perrosResponse = await fetch(
    "https://api.giphy.com/v1/gifs/trending?api_key=ik10z2NzXWZ7ROYvidLcrC8SwfIg8c0v"
  );
  const perrosData = await perrosResponse.json();

  const elementosPerros = getPerrosElements(perrosData);

  elementosPerros.forEach((element) => {
    document.querySelector(".row.containerPerros").appendChild(element);
  });
};

botonMostarPerros.addEventListener("click", mostrarFotosHandler);
