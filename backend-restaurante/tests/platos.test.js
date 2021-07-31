const request = require("supertest");

const server = require("../server");
// workaround para evitar warning en la terminal
require("mysql2/node_modules/iconv-lite").encodingExists("foo");

let token;
beforeAll((done) => {
  request(server)
    .post("/login")
    .send({
      correo: "danyjavierb@gmail.com",
      contrasena: "password123",
    })
    .end((err, response) => {
      token = response.body.token;
      done();
    });
});

describe("tests /platos", () => {
  it("/platos debe retornar 401 si no se envia token", async () => {
    const res = await request(server).get("/platos").send();
    expect(res.statusCode).toEqual(401);
  });

  it("/platos debe retornar 200 cuando tenga token correcto", async () => {
    const res = await request(server)
      .get("/platos")
      .set("Authorization", `Bearer ${token}`)
      .send();

    expect(res.statusCode).toEqual(200);
    expect(res.type).toEqual("application/json");
  });
});
