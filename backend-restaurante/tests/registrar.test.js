const request = require("supertest");

const server = require("../server");
// workaround para evitar warning en la terminal
require("mysql2/node_modules/iconv-lite").encodingExists("foo");

describe("tests /registrar", () => {
  it("/registrar debe retornar error, todos los campos son obligatorios", async () => {
    const res = await request(server).post("/registrar").send({
      username: "zeema",
      name: "Zee Mairon",
      correo: "zmairon@gmail.com",
      direccion: "AV Siempre viva",
    });
    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty(
      "error",
      "Todos los campos son obligatorios"
    );
  });

  it("/registrar debe retornar 200 y usuario recien creado", async () => {
    const nuevoUsuarioBody = {
      username: "zee1234",
      correo: "zee2@gmail.com",
      contrasena: "password123",
      nombre: "zee",
      direccion: "calle 123",
      telefono: "+57 31123232323",
    };

    const res = await request(server).post("/registrar").send(nuevoUsuarioBody);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("username", nuevoUsuarioBody.username);
    expect(res.body).toHaveProperty("correo", nuevoUsuarioBody.correo);
    expect(res.body).toHaveProperty("direccion", nuevoUsuarioBody.direccion);
  });
});
