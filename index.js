const { Router } = require("express");
const prisma = require("./configs/prisma");
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

index.get("/user/:email", async (req, res) => {
  const { email } = req.params;
  
  const user = await prisma.user.findUnique({
    where: { email },
  });

  return res.json({ user });
});

module.exports = index;
