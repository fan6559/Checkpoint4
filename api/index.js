require("dotenv").config(); // To get environment variables from a .env file
const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 8000;

// Get the Sequelize config
const sequelize = require("./sequelize");
require("./sequelize/associations"); // If you have associations

// Middlewares
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.send("toto"));

//route
app.use("/albumPhoto", require("./route/albumPhoto.route"));
app.use("/celebrite", require("./route/celebrite.route"));
app.use("/event", require("./route/event.route"));
app.use("/message", require("./route/message.route"));
app.use("/metier", require("./route/metier.route"));
app.use("/user", require("./route/user.route"));

async function main() {
  try {
    await sequelize.sync(); // Sync Method will create Database using the config & models
    await sequelize.authenticate();
    console.log("Database connection sucessfull");
    app.listen(PORT, err => {
      if (err) throw new Error("Something bad happened...");
      console.log(`Listening to port ${PORT}.`);
    });
  } catch (err) {
    console.error("Unable to reach database", err);
  }
}

if (process.env.NODE_ENV !== "test") {
  main();
}

// If you want to add tests with Mocha & Chai
module.exports = app;
