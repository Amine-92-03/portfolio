const http = require("http");
const app = require("./app");
// require('./utils/dbConnexion')
const server = http.createServer(app);

const serverPort = process.env.PORT || 5000;

app.set("port");


server.listen(serverPort, (err) => {
  if (!err) {
    console.log("Listen to port:", serverPort);
  } else {
    console.log("Dont listen to any port");
  }
});
