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

// configuration de la messagerie
var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.USER_MAIL,
    pass: process.env.PASSWORD_MAIL,
  },
});

var mailOptions = {
  from: "bigdatamspr@gmail.com",
  to: "bigdatamspr@gmail.com",
  subject: "message",
  // text: message,
  html: `<h1>Bonjour Amine! Rapport de l'application :</h1><h4>'message'</h4>`,
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: ");
  }
});

// console.log(transporter);
