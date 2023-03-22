const express = require("express");
const { body } = require("express-validator");
const articleController = require("../controllers/articleController");

const router = express.Router();

router.post("/list", articleController.list);
router.post("/add", articleController.add);
router.delete("/delete/:id", articleController.delete);
router.put("/edit", articleController.edit);
router.patch("/like", articleController.like);

module.exports = router;
