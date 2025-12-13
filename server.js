const app = require("./app");

const PORT = 3000;

app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }

  console.log(`Running on Port ${PORT}`);
});
