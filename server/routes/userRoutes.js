const express = require("express");
const { body } = require("express-validator");
const userController = require("../controllers/userController");

const router = express.Router();

router.post("/login", userController.login);

module.exports = router;
