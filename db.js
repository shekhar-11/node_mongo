const mongoose = require("mongoose");
require("dotenv").config();
// const db = mongoose.connect;
// const url = "mongodb://localhost:27017/dbPractice";
const url = MONGO_URL;
mongoose.connect(url);
const database = mongoose.connection;

database.on("connected", function () {
  console.log("database CONNECTED");
});
database.on("disconnected", function () {
  console.log("database DISCONNECTED");
});

module.exports = database;
