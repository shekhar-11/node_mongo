//THis comment is for the next version || THe models and the db files to be created seperately

const mongoose = require("mongoose");

const employee = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  salary: {
    type: Number,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  id: {
    required: true,
    type: String,
    unique: true,
  },
  work: {
    required: true,
    type: String,
    enum: ["manager", "developer", "designer", "analyst", "intern"],
  },
});

const empModel = mongoose.model("empModel", employee);
module.exports = empModel;
