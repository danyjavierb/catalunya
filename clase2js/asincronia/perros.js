//const templatePerroCard = ` <div class="col-md-4">

//</div>`;

const getPerrosElements = (perrosData) => {
  const contenedoresPerros = perrosData.message.map((url) => {
    const contenedor = document.createElement("div");
    contenedor.classList.add("col-md-4");
    contenedor.innerHTML = `
        <div class="card mb-4 box-shadow">
        <img
          class="card-img-top"
          src="${url}"
          alt="Card image cap"
        />
        <div class="card-body">
          <p class="card-text">
            <a
              href=" ${url}"
            >
              ${url}
            </a>
          </p>
        </div>
      </div>`;
    return contenedor;
  });

  return contenedoresPerros;
};

const botonMostarPerros = document.querySelector("#mostrarFotos");

const mostrarFotosHandler = async (ev) => {
  ev.preventDefault();

  const perrosResponse = await fetch(
    "https://dog.ceo/api/breeds/image/random/3"
  );
  const perrosData = await perrosResponse.json();

  const elementosPerros = getPerrosElements(perrosData);

  elementosPerros.forEach((element) => {
    document.querySelector(".row.containerPerros").appendChild(element);
  });
};

botonMostarPerros.addEventListener("click", mostrarFotosHandler);
