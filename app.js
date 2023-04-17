// DEPENDENCIES
const express = require("express");
// const logsController = require("./controllers/logController.js");
const cors = require('cors')

// CONFIGURATION
const app = express();
app.use(express.json()); // json middleware parses incoming requests with JSON payloads
app.use(cors())

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to the Budget Tracking");
});

// app.use("/logs", logsController);

app.get("*", (req, res) => {
  res.status(404).json({ error: "Sorry, page not found!" });
});

// EXPORT
module.exports = app;
