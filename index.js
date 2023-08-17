const jsonserver = require("json-server");
const cors = require("cors");
const path = require("path");
const fs = require("fs");

const server = jsonserver.create();
const data = JSON.parse(fs.readFileSync(path.join(__dirname, "data.json")));
const router = jsonserver.router(data);
const middlware = jsonserver.defaults();

server.use(cors());
server.use(jsonserver.bodyParser);
server.use(middlware);
server.use(router);

server.listen(8008, () => {
  try {
    console.log("server started");
  } catch (error) {
    console.log(error);
  }
});
