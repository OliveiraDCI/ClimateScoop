require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const db = require("./config/db");
db();

const app = express();

// Security measures
const rateLimiter = rateLimit({
  windowMs: 5 * 60 * 1000, // 5 minutes
  max: 30, // 30 requests
  message: "Too many requests, try again later.",
});
app.use(rateLimiter);
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: [
        "'self'",
        "'unsafe-inline'",
        "https://accounts.google.com/gsi/client",
      ],
      styleSrc: [
        "'self'",
        "'unsafe-inline'",
        "https://accounts.google.com/gsi/style",
      ],
      frameSrc: ["'self'", "https://accounts.google.com/gsi/"],
      connectSrc: ["'self'", "https://accounts.google.com/gsi/"],
    },
  })
);
app.use(
  helmet.hsts({
    maxAge: 63072000, // 2 years time, help ensure HTTPS requests .
  })
);
app.use(helmet.xssFilter()); // Help mitigate Cross Site Scripting
app.use(helmet.frameguard()); // Sets the X-Frame-Options header to help mitigate clickjacking attack
app.use(helmet.noSniff()); // sets the X-Content-Type-Options header to nosniff . This mitigates MIME type sniffing which can cause security vulnerabilities

app.use(cookieParser());
app.use(express.json());
app.use(cors());

app.use("/api/user", require("./routes/userRoutes"));
app.use("/api/article", require("./routes/articleRoutes"));

const port = process.env.PORT || 4001;

app.listen(port, () => console.log("Server is up and running at port", port));
