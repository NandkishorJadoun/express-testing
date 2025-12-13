const prisma = require("./configs/prisma");

async function main() {
  const users = await prisma.user.findMany();
  console.log("User Array:", users);
}

main();
