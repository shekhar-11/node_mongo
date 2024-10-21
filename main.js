const empModel = require("./models");
const db = require("./db");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const routerImport = require("./employeeRoute");
app.use("/employee", routerImport);
app.listen(3000);

//all running
