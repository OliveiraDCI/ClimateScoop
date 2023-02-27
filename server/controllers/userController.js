const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");

module.exports.register = async (req, res) => {
  try {
    console.log("Hello from register", req.body);

    // secure authentication

    const user = await User.create(req.body);

    res.send({ success: true });
  } catch (error) {
    console.log("register error", error.message);

    res.send({ success: false, error: error.message });
  }
};
