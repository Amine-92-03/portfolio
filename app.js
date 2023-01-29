const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const home = require("./Controllers/home");

app.set("views", "./views");
app.set("view engine", "ejs");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use('/api/chart', chart)

require("dotenv").config();

app.get("/", home.getHomedata);


// app.use(express.static("./client"));

module.exports = app;
