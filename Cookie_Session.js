const express = require("express");
const { v4: uuidv4 } = require("uuid");

const app = express();
app.use(express.json());
const sessions = {};

app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  if (username !== "admin" || password !== "admin") {
    return res.status(401).send("invalid user name");
  }
  const sessionId = uuidv4(); // Corrected the function name to uuidv4
  sessions[sessionId] = { username, userId: 1 };
  res.set("set-cookie", `session=${sessionId}`);
  res.send("success");
});

app.get("/register", (req, res) => {
  const sessionId = req.headers.cookie?.split("=")[1];
  const userSession = sessions[sessionId];
  if (!userSession) {
    return res.status(401).send("invalid session");
  }
  const userId = userSession.userId;
  res.send([
    {
      id: 1,
      title: "me",
      userId,
    },
  ]);
});

app.post("/logout", (req, res) => {
  const sessionId = req.headers.cookie?.split("=")[1];
  delete sessions[sessionId];
  res.set("Set-Cookie", "session=; expires=Thu, 01 Dec 2023 00:00:00 GMT");
  res.send("success");
});

app.listen(3000, () => {
  console.log("Server is running in http://lvh.me:5000");
});
