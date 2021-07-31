const request = require("supertest");

const server = require("../server");
// workaround para evitar warning en la terminal
require("mysql2/node_modules/iconv-lite").encodingExists("foo");

describe("Rutas con y sin token", () => {
  it("/platos debe retornar  unauthorized si no hay token valido", async () => {
    const res = await request(server).get("/platos").send();
    expect(res.unauthorized).toEqual(true);
  });

  it("/pedidos/misPedidos debe retornar unauthorized si no hay token valido", async () => {
    const res = await request(server).get("/pedidos/misPedidos").send();
    expect(res.unauthorized).toEqual(true);
  });

  it("login con credenciales incorrectas debe retornar unathorized", async () => {
    const res = await request(server).post("/login").send({
      correo: "danyjavierb@gmail.com",
      contrasena: "malpassword",
    });

    expect(res.unauthorized).toEqual(true);
    expect(res.statusCode).toEqual(401);
    expect(res.body).toHaveProperty("error", "correo o contrasena invalida");
  });

  it("login con credenciales correctas debe retornar token", async () => {
    const res = await request(server).post("/login").send({
      correo: "danyjavierb@gmail.com",
      contrasena: "password123",
    });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("token");
  });
});
