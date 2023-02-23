const express = require("express");
require("dotenv").config();
const cookieParser = require("cookie-parser");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const db = require("./config/db");
db();

const app = express();

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use("/user", require("./routes/userRoutes"));

const port = process.env.PORT || 4001;

app.listen(port, () => console.log("Server is up and running at port", port));
