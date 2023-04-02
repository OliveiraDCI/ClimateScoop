const express = require("express");
const { body, check } = require("express-validator");
const articleController = require("../controllers/articleController");

const router = express.Router();

const articleValidationRules = () => {
  return [
    check("topic").optional().isString(),
    check("region").optional().isString(),
    check("title").optional().isString(),
    check("img").optional().isString(),
    check("imgDescription").optional().isString(),
    check("article").optional().isString(),
    check("references").optional().isString(),
    check("likes").optional().isArray(),
    check("owner").optional().isMongoId(),
  ];
};

router.post(
  "/add",
  articleValidationRules(),
  [
    body("topic").trim().escape(),
    body("region").trim().escape(),
    body("title").trim().escape(),
    body("img").trim().escape(),
    body("imgDescription").trim().escape(),
    body("article").trim().escape(),
    body("references").trim().escape(),
  ],
  articleController.add
);

router.put(
  "/edit",
  articleValidationRules(),
  [
    body("formData.topic").trim().escape(),
    body("formData.region").trim().escape(),
    body("formData.title").trim().escape(),
    body("formData.img").trim().escape(),
    body("formData.imgDescription").trim().escape(),
    body("formData.article").trim().escape(),
    body("formData.references").trim().escape(),
  ],
  articleController.edit
);

router.post("/list", articleController.list);

router.delete("/delete/:id", articleController.delete);

module.exports = router;
