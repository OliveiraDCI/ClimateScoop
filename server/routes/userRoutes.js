const express = require("express");
const { body } = require("express-validator");
const userController = require("../controllers/userController");

const router = express.Router();

// Possibly implement auth fn here, for login and other protected routes

router.post("/register", userController.register);

module.exports = router;
