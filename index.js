require("dotenv").config();
const express = require("express");
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/username", (req, res) => {
  res.send("Chhitize11");
});

app.get("/login", (req, res) => {
  res.send("Lorem ipsum dolor sit amet.");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
