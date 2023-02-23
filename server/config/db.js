const mongoose = require("mongoose");

module.exports = async () => {
  try {
    mongoose.set("strictQuery", false);

    await mongoose.connect(process.env.DB_URI);
    console.log("connected to DB!");
  } catch (err) {
    console.log("Error connecting to the DB: ", err.message);

    process.exit(1);
  }
};
