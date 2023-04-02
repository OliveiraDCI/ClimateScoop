const Article = require("../models/Article");
const { check, validationResult } = require("express-validator");

module.exports.list = async (req, res) => {
  try {
    const userId = req.body._id;

    const articles = await Article.find();

    if (articles.length === 0) {
      return res
        .status(404)
        .send({ success: false, error: "No articles found" });
    }

    res.status(200).send({ success: true, articles });
  } catch (error) {
    console.log("articlesController list error: ", error.message);

    res.status(500).send({ success: false, error: error.message });
  }
};

module.exports.add = async (req, res) => {
  try {
    check("topic").optional().isString();
    check("region").optional().isString();
    check("title").optional().isString();
    check("img").optional().isString();
    check("imgDescription").optional().isString();
    check("article").optional().isString();
    check("references").optional().isString();
    check("likes").optional().isArray();
    check("owner").optional().isMongoId();

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    if (!req.body) {
      return res
        .status(400)
        .send({ success: false, error: "Empty request body" });
    }

    const article = await Article.create(req.body);

    res.status(201).send({ success: true, article });
  } catch (error) {
    console.log("articlesController add error: ", error.message);

    res.status(500).send({ success: false, error: error.message });
  }
};

module.exports.delete = async (req, res) => {
  try {
    const deletedArticle = await Article.findByIdAndDelete(req.params.id);

    if (!deletedArticle) {
      return res
        .status(404)
        .send({ success: false, error: "Article not found" });
    }

    res.status(200).send({ success: true });
  } catch (error) {
    console.log("articlesController delete error: ", error.message);

    res.status(500).send({ success: false, error: error.message });
  }
};

module.exports.edit = async (req, res) => {
  try {
    check("formData.topic").optional().isString();
    check("formData.region").optional().isString();
    check("formData.title").optional().isString();
    check("formData.img").optional().isString();
    check("formData.imgDescription").optional().isString();
    check("formData.article").optional().isString();
    check("formData.references").optional().isString();

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    const { id, formData } = req.body;

    const editedArticle = await Article.findByIdAndUpdate(
      id,
      { ...formData },
      { new: true }
    );

    if (!editedArticle) {
      return res
        .status(404)
        .send({ success: false, error: "Article not found" });
    }

    res.status(200).send({ success: true });
  } catch (error) {
    console.log("articlesController edit error: ", error.message);

    res.status(500).send({ success: false, error: error.message });
  }
};
