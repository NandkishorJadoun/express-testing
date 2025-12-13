const { Router } = require("express");
const index = new Router();

const array = [];

index.get("/", (req, res) => {
  res.json({ name: "John Doe" });
});

index.get("/test", (req, res) => res.json({ array }));

index.post("/test", (req, res) => {
  array.push(req.body.item);
  res.send("success!");
});

module.exports = index;
