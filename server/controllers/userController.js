const User = require("../models/User");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");

module.exports.login = async (req, res) => {
  try {
    console.log("userController login - req.body: ", req.body);

    // const errors = validationResult(req);
    // console.log("Login validation error: ", errors);

    // if (!errors.isEmpty()) {
    //   return res.send({ success: false, error: errors.array() });
    // }

    // check if user exists, if not - create new.

    const user = await User.findOne(
      { email: req.body.email },
      (err, foundUser) => {
        if (err) {
          console.error("Error on finding user: ", err);
        } else {
          if (foundUser) {
            // User already exists, return original document
            return foundUser;
          } else {
            // User does not exist, create a new one
            let newUser = new User({
              ...req.body,
            });

            // Save the new user to database and return it
            newUser.save((err) => {
              if (err) {
                console.error("Error on newUser save: ", err);
              } else {
                return newUser;
              }
            });
          }
        }
      }
    );
    console.log("User from login fn in userController: ", user);

    const token = jwt.sign({ id: user._id }, "extraJWTstring", token);

    res.cookie("user", token);

    res.send({ success: true, user: user });
  } catch (error) {
    console.log("register error", error.message);

    res.send({ success: false, error: error.message });
  }
};
