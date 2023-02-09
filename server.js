const jsonServer = require("json-server");
const cors = require("cors");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const Port = process.env.Port || 3500;

server.use(middlewares);
server.use(router);
server.use(cors());
server.listen(Port, () => {
  console.log("JSON Server is running");
});
