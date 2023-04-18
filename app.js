// DEPENDENCIES
const express = require("express");
const budgetController = require("./controllers/budgetController.js");
const cors = require("cors");

// CONFIGURATION
const app = express();
app.use(cors());
app.use(express.json()); // json middleware parses incoming requests with JSON payloads


// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to the Budget Tracking App");
});

app.use("/budgets", budgetController);

app.get("*", (req, res) => {
  res.status(404).json({ error: "Sorry, page not found!" });
});

// EXPORT
module.exports = app;