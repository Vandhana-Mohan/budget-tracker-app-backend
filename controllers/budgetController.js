const express = require("express");
const budgets = express.Router();
const budgetsArray = require("../models/budget.js");
const budgetValidator = require("../models/validators.js");


budgets.get("/", (req, res) => {
  res.json(budgetsArray);
});

// SHOW budget transactions

budgets.get("/:arrayIndex", (req, res) => {
  if (budgetsArray[req.params.arrayIndex]) {
    res.json(budgetsArray[req.params.arrayIndex]);
  } else {
    res.status(404).json({ error: "Not Found" });
    res.redirect("/budgets");
  }
});


module.exports = budgets;
