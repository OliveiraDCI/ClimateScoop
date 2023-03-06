const Article = require("../models/Article");

module.exports.list = async (req, res) => {
  try {
    console.log("articlesController list runs: ");

    res.send({ success: true });
  } catch (error) {
    console.log("articlesController list error: ", error.message);

    res.send({ success: false, error: error.message });
  }
};

module.exports.add = async (req, res) => {
  try {
    console.log("articlesController add runs: ");

    const article = await Article.create(req.body);

    res.send({ success: true });
  } catch (error) {
    console.log("articlesController add error: ", error.message);

    res.send({ success: false, error: error.message });
  }
};

module.exports.delete = async (req, res) => {
  try {
    console.log("articlesController delete runs: ");

    res.send({ success: true });
  } catch (error) {
    console.log("articlesController delete error: ", error.message);

    res.send({ success: false, error: error.message });
  }
};

module.exports.edit = async (req, res) => {
  try {
    console.log("articlesController edit runs: ");

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
