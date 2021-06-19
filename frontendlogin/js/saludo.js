document.addEventListener("DOMContentLoaded", async () => {
  if (!localStorage.token) {
    window.location.href = "login.html";
  }

  const headers = new Headers();

  headers.append("Content-Type", "application/json");
  headers.append("Authorization", `Bearer ${localStorage.token}`);

  try {
    const responseUserInfo = await fetch("http://localhost:3000/userInfo", {
      method: "GET",
      headers,
      mode: "cors",
    });
    const responseJsonUserInfo = await responseUserInfo.json();

    if (responseUserInfo.status == 401) {
      localStorage.removeItem("token");
      window.location.href = "login.html";
    }
    if (responseUserInfo.status == 200) {
      document.querySelector(
        "#nombre"
      ).innerHTML = `<span>${responseJsonUserInfo.nombre}</span>`;

      document.querySelector(
        "#correo"
      ).innerHTML = `<span>${responseJsonUserInfo.correo}</span>`;

      document.querySelector(
        "#edad"
      ).innerHTML = `<span>${responseJsonUserInfo.edad}</span>`;
    }
  } catch (error) {}
});
