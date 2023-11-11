// Example 3: Express Server with Token-Based Middleware

const express = require("express");
const app = express();

// Middleware to check for a token in the request headers
const customMiddleware = (req, res, next) => {
  const token = req.headers.token;

  if (token) {
    next();
  } else {
    res.status(401).send("Token is required!");
  }
};

app.use(customMiddleware);

app.get("/get", (req, res) => {
  res.send("Hello World!");
});

app.post("/path2", (req, res) => {
  res.send("Hello World!");
});

app.delete("/path3", (req, res) => {
  res.send("Hello World!");
});

app.listen(3000, () => console.log("Server is ready at http://lvh.me:3000"));
