const server = require("./server");
const { APP_PORT } = process.env;
server.listen(APP_PORT, () => {
  console.log(`servidor iniciado en puerto ${APP_PORT}`);
});
