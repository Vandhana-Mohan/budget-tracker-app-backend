// DEPENDENCIES
const express = require("express");
const budgetController = require("./controllers/budgetController.js");
const cors = require("cors");

// CONFIGURATION
const app = express();
app.use(express.json()); // json middleware parses incoming requests with JSON payloads
app.use(cors());

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to the Budget Tracking");
});

// app.use("/budgets", budgetController);

app.get("*", (req, res) => {
  res.status(404).json({ error: "Sorry, page not found!" });
});

// EXPORT
module.exports = app;
