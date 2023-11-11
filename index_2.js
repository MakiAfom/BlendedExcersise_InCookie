//Example 2: Express Server with Request Counter Middleware

const express = require("express");
const app = express();
let requestCounter = 0;

// Middleware to count incoming requests
const logger = (req, res, next) => {
  requestCounter++;
  console.log(`Number of requests received: ${requestCounter}`);
  next();
};

app.use(logger);

app.get("/", (req, res) => {
  res.send("hello world");
});

app.post("/head2", (req, res) => {
  res.send("hello world");
});

app.use(logger);

app.listen(3000, () => {
  console.log("Server ready at http://lvh.me:3000");
});
