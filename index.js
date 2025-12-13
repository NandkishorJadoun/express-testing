const { Router } = require("express");
const index = new Router();

const array = [];

index.get("/", (req, res) => {
  res.json({ name: "John Doe" });
});

module.exports = index;
