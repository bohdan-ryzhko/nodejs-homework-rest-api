const app = require("./app");
const mongoose = require("mongoose");

const { PORT, DB_URL } = process.env;

mongoose.connect(DB_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Database connection successful, port: ${PORT}`)
    });
  })
  .catch(error => {
    console.log(error);
    process.exit(1)
  });
