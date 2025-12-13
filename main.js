const prisma = require("./configs/prisma");

async function main() {
  const users = await prisma.user.create({
    data: {
      name: "Jana",
      email: "jana@email.com",
    },
  });
  console.log("data", users);
}

main();
