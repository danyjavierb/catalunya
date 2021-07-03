const express = require("express");
const expressJwt = require("express-jwt");
const jwt = require("jsonwebtoken");
const helmet = require("helmet");
const cors = require("cors");
const compression = require("compression");
const rateLimit = require("express-rate-limit");

const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors());
server.use(compression());
const JWT_SECRET = "asdfjkhasdjkf782347892314jkasdhasd";
server.use(
  expressJwt({
    secret: JWT_SECRET,
    algorithms: ["HS256"],
  }).unless({ path: ["/login"] })
);

//endpoints

//endpoints

server.listen(3000, () => {
  console.log("servidor iniciado en puerto 3000");
});
