const mongoose = require("mongoose");
// const db = mongoose.connect;
const url = "mongodb://localhost:27017/dbPractice";

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const database = mongoose.connection;

db.on("connected", function () {
  console.log("DB CONNECTED");
});
db.on("disconnected", function () {
  console.log("DB DISCONNECTED");
});

module.exports = database;
