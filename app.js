const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const home = require("./Controllers/homeController");
const experience = require("./Controllers/experienceController");
const etudes = require("./Controllers/etudesController");
const about = require("./Controllers/aboutController");
const conatct = require("./Controllers/contactController");
// const expressLayouts = require("express-ejs-layouts");
require("dotenv").config();

app.use("/css", express.static("./public/css"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(expressLayouts);

app.set("view engine", "ejs");
app.set("View", "./Views");
// app.use('/api/chart', chart)

app.get("/", home.getHomedata);
app.get("/experience", experience.getData);
app.get("/etudes", etudes.getData);
app.get("/about", about.getData);
app.get("/conatct", conatct.getData);

// app.get("/about", home.getAboutata);

// app.use(express.static("./client"));

module.exports = app;
