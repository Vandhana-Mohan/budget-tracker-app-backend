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

// CREATE

budgets.post("/", (req, res) => {
  budgetsArray.push(req.body);
  res.json(budgetsArray[budgetsArray.length - 1]);
});

// DELETE

budgets.delete("/:arrayIndex", (req, res) => {
  const index = req.params.arrayIndex;

  if (isNaN(index)) {
    // the provided index is not a number
    res.status(400).json({ error: "Invalid index" });
  } else if (budgetsArray[index]) {
    // the budget at the provided index exists and can be deleted
    const deletedBudgets = budgetsArray.splice(index, 1);
    res.status(200).json(deletedBudgets);
  } else {
    // the provided index is out of range
    res.status(404).json({ error: "Not Found" });
  }
});

// UPDATE

budgets.put("/:index", budgetValidator, (req, res) => {
  const { index } = req.params;
  if (budgetsArray[index]) {
    budgetsArray[index] = req.body;
    res.status(200).json(budgetsArray[index]);
  } else {
    res.status(404).json({ error: "Not Found" });
  }
});

module.exports = budgets;
