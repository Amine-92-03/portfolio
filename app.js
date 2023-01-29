const express = require("express");
const bodyParser = require("body-parser");
const app = express();
// const chart = require("./routes/chartRoute");
// const histo = require("./routes/histoRoute");
// const etatSys = require("./routes/etatSysRoute");
// const stat = require("./routes/statRoute");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use('/api/chart', chart)

require("dotenv").config();

app.use(express.static("./client"));

module.exports = app;
