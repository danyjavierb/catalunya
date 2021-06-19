document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#submit").addEventListener("click", async (ev) => {
    ev.preventDefault();

    const body = {};

    body.correo = document.querySelector("#correo").value;
    body.contrasena = document.querySelector("#password").value;

    const headers = new Headers();

    headers.append("Content-Type", "application/json");

    try {
      const responseLogin = await fetch("http://localhost:3000/login", {
        method: "POST",
        body: JSON.stringify(body),
        headers,
        mode: "cors",
      });
      const responseJsonLogin = await responseLogin.json();

      if (responseLogin.status == 401) {
        alert(responseJsonLogin.error);
      }
      if (responseLogin.status == 200) {
        localStorage.setItem("token", responseJsonLogin.token);
        alert("login ok");
        window.location.href = "saludo.html";
      }
    } catch (error) {}
  });
});
