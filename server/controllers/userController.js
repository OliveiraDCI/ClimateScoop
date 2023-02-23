const User = require("../models/User");

module.exports.register = async (req, res) => {
  try {
    console.log("Hello from register", req.body);

    const user = await User.create(req.body);

    res.send({ success: true });
  } catch (error) {
    console.log("register error", error.message);

    res.send({ success: false, error: error.message });
  }
};
