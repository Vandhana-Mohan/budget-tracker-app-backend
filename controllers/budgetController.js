const express = require("express");
const budgets = express.Router();
const budgetsArray = require("../models/budget.js");
// const budgetValidator = require("../models/validators.js");

budgets.get("/", (req, res) => {
  res.json(budgetsArray); // Index page
});

// SHOW budget transactions

budgets.get("/:arrayIndex", (req, res) => {
  // Show page
  if (budgetsArray[req.params.arrayIndex]) {
    res.json(budgetsArray[req.params.arrayIndex]);
  } else {
    res.status(404).json({ error: "Not Found" });
    res.redirect("/budgets");
  }
});

// CREATE

budgets.post("/", (req, res) => {
  // Create new transaction
  const { id, item_name, amount, date } = req.body;
  if (id && item_name && amount && date) {
    if (
      typeof id === "string" &&
      typeof item_name === "string" &&
      typeof amount === "number" &&
      typeof date === "string"
    ) {
      budgetsArray.push(req.body);
      res.json(budgetsArray[budgetsArray.length - 1]);
    } else {
      res.status(400).json({ error: "Invalid transaction data" });
    }
  } else {
    res.status(400).json({ error: "Transaction data is missing" });
  }
});

// DELETE

budgets.delete("/:arrayIndex", (req, res) => {
  // Delete Transaction record
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

budgets.put("/:index", (req, res) => {
  // Update a transaction record
  const { index } = req.params;
  if (budgetsArray[index]) {
    budgetsArray[index] = req.body;
    res.status(200).json(budgetsArray[index]);
  } else {
    res.status(404).json({ error: "Not Found" });
  }
});

module.exports = budgets;
