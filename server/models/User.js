const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema({
  email: { type: String },
  firstName: { type: String },
  lastName: { type: String },
  picture: { type: String },
});

module.exports = mongoose.model("User", userSchema);
