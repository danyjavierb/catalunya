const formLogin = document.querySelector("#loginForm");

if (localStorage.getItem("token") != null) {
  window.location.href = "mascotas.html";
}

formLogin.addEventListener("submit", async (event) => {
  event.preventDefault();

  const username = document.querySelector('form input[name="username"]').value;
  const password = document.querySelector("#password").value;
  const bodyRequest = {
    username,
    password,
  };

  const headers = new Headers();
  headers.append("Content-Type", "application/json");

  try {
    const responseLogin = await fetch("http://localhost:3001/login", {
      method: "POST",
      body: JSON.stringify(bodyRequest),
      headers,
    });

    const responseObject = await responseLogin.json();

    if (responseLogin.status == 200) {
      alert("login exitoso");
      localStorage.setItem("token", responseObject.token);
      window.location.href = "mascotas.html";
    } else {
      alert(responseObject.error);
    }
  } catch (error) {
    alert("algo salio mal");
  }
});
