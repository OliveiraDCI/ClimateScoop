const Article = require("../models/Article");

module.exports.list = async (req, res) => {
  try {
    const userId = req.body._id;
    console.log("articlesController.list - userId: ", userId);

    const articles = await Article.find();

    res.send({ success: true, articles });
  } catch (error) {
    console.log("articlesController list error: ", error.message);

    res.send({ success: false, error: error.message });
  }
};

module.exports.add = async (req, res) => {
  try {
    console.log("articlesController.add - req.body: ", req.body);

    const article = await Article.create(req.body);

    res.send({ success: true, article });
  } catch (error) {
    console.log("articlesController add error: ", error.message);

    res.send({ success: false, error: error.message });
  }
};

module.exports.delete = async (req, res) => {
  try {
    console.log("articlesController delete runs: ");

    console.log("id --> ", req.params.id);

    const deletedArticle = await Article.findByIdAndDelete(req.params.id);

    if (!deletedArticle)
      return res.send({ success: false, error: "Article not found" });

    res.send({ success: true });
  } catch (error) {
    console.log("articlesController delete error: ", error.message);

    res.send({ success: false, error: error.message });
  }
};

module.exports.edit = async (req, res) => {
  try {
    console.log("articlesController edit runs: ");

    const { id, formData } = req.body;

    console.log("id and data: id first --> ", id);

    const editedArticle = await Article.findByIdAndUpdate(
      id,
      { ...formData },
      { new: true }
    );

    console.log("edited article: ", editedArticle);

    res.send({ success: true });
  } catch (error) {
    console.log("articlesController edit error: ", error.message);

    res.send({ success: false, error: error.message });
  }
};

module.exports.like = async (req, res) => {
  try {
    console.log("articlesController like runs: ");

    res.send({ success: true });
  } catch (error) {
    console.log("articlesController like error: ", error.message);

    res.send({ success: false, error: error.message });
  }
};
