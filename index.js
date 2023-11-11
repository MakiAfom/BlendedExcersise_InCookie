// Example 1: Basic Express Server with Request Logging Middleware

const express = require("express");
const app = express();

// Middleware to log incoming requests
const loggerMiddleware = (req, res, next) => {
  console.log(`${req.method}, ${req.url}`);
  next();
};

app.use(loggerMiddleware);

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(3000, () => {
  console.log("Server listening on http://lvh.me:3000");
});
