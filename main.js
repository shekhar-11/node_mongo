const empModel = require("./models");
const db = require("./db");
require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const routerImport = require("./employeeRoute");
app.use("/employee", routerImport);
const PORT = process.env.PORT || 3000;
app.listen(PORT);

//all running
