const http = require("http");
const app = require("./app");
const mongoose = require("mongoose");
const server = http.createServer(app);
const nodemailer = require("nodemailer");

require("dotenv").config();

const serverPort = process.env.PORT || 5000;
app.set("port");

server.listen(serverPort, (err) => {
  if (!err) {
    console.log("Listen to port:", serverPort);
  } else {
    console.log("Dont listen to any port");
  }
});

// enlever le warning
mongoose.set("strictQuery", false);
// Connecting to database
mongoose
  .connect(process.env.URL_MONGODB)
  .then((ans) => {
    console.log("Connected to DB Successful");
  })
  .catch((err) => {
    console.log("Error in the Connection");
  });


