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

/*para obtener el token de spotify
importar en postman para referencia

curl --location --request POST 'https://accounts.spotify.com/api/token' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--header 'Cookie: __Host-device_id=AQDKguuATrH-C0xesfKZmjEaZQANucuxCFXIFPIpUFfbo5zVy6VaVPFCgtryFiSsrHmJr3dcUWwiuO0HHpB8lUqwmoVC-drTS-U; __HOST-sp_fid=5d085df6-500b-409b-80bc-b5282a8b4141' \
--data-urlencode 'grant_type=client_credentials' \
--data-urlencode 'client_id=clientidgeneradoendashboard' \
--data-urlencode 'client_secret=cliensecretgeneradoendashboard'


*/
