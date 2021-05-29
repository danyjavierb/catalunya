if (localStorage.getItem("token") == null) {
  window.location.href = "login.html";
}

const token = localStorage.getItem("token");

const headers = new Headers();
headers.append("Authorization", `Bearer ${token}`);
headers.append("Content-Type", "application/json");

const traerMascotas = fetch("http://localhost:3001/mascotas", {
  method: "GET",
  headers,
});

traerMascotas
  .then((mascotasResponse) => mascotasResponse.json())
  .then((mascotasObject) => {
    const nombres = mascotasObject
      .map((mascota) => {
        return `<h1>${mascota.nombre}</h1>`;
      })
      .join("");

    document.querySelector("#mascotasContainer").innerHTML = nombres;
  })
  .catch((e) => console.log(e.message));
