require("dotenv").config();
const User = require("../models/User");
const { OAuth2Client } = require("google-auth-library");

module.exports.login = async (req, res) => {
  try {
    const token = req.body.token;
    const audience = process.env.CLIENT_ID;

    const client = new OAuth2Client(audience);

    async function verify() {
      const ticket = await client.verifyIdToken({
        idToken: token,
        audience: audience,
      });

      const payload = ticket.getPayload();
      // const userid = payload["sub"];

      let verification = false;

      if (
        payload.aud === audience &&
        payload.iss === "https://accounts.google.com"
      ) {
        console.log("validation checks successful !!!");
        verification = true;
      }

      return verification ? payload : verification;
    }

    const userObj = await verify();

    if (userObj) {
      let user;

      const currentUser = await User.findOne({ email: userObj.email });

      if (currentUser) {
        user = currentUser;
      } else {
        const newUser = new User({
          email: userObj.email,
          firstName: userObj.given_name,
          lastName: userObj.family_name,
          picture: userObj.picture,
        });

        await newUser.save();
        user = newUser;
      }

      res.send({ success: true, user });
    } else {
      res.send({
        success: false,
        error: "JWT could not be verified",
      });
    }
  } catch (error) {
    console.log("userController login error: ", error.message);

    res.send({ success: false, error: error.message });
  }
};
