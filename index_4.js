// Example 4: Express Server with Custom Header Middleware

const express = require("express");
const app = express();

// Middleware to set a custom response header
const customMiddleware = (req, res, next) => {
  res.setHeader("X-Powered-By", "Mikal");
  next();
};

app.use(customMiddleware);

app.get("/path1", (req, res) => {
  res.send("Hello World!");
});

app.post("/path2", (req, res) => {
  res.send("Hello World!");
});

app.delete("/path3", (req, res) => {
  res.send("Hello World!");
});

app.listen(3000, () => {
  console.log("Server is running at http://lvh.me:3000");
});
